import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Catagery } from '../../../Models/catagery';
import { Item } from '../../../Models/item';
import { NgForm } from '@angular/forms';
import { ItemService } from '../../../Service/item.service';
import { Loginuser } from '../../../Models/loginuser';
import { TokenStorageServiceService } from '../../../Service/token-storage-service.service';
import { Restaurentcatagery } from '../../../Models/restaurentcatagery';

@Component({
  selector: 'app-restaurentitems',
  templateUrl: './restaurentitems.component.html',
  styleUrl: './restaurentitems.component.css'
})
export class RestaurentitemsComponent {
   name2=new Item();
  catagory?:Catagery[];
  foods!:Item[];
  restaurentCatagery?:Restaurentcatagery[];
  selectedFile: File | null = null;
  updateFile: File | null = null;
  updateMessage: string = '';
  createMessage: string = '';
  deleteMessage:string='';
  showToastMessage: boolean = false;
  id!:number;
  imageValue:any;
    userDetail!:Loginuser;
  item=new Item();
  @ViewChild('itemForm', { static: true }) itemForm!: NgForm;

  constructor(private service:ItemService,private router:Router,private tokenStorage: TokenStorageServiceService){}

  base64ToFile(base64String: string, filename: string, mimeType: string): File {
    debugger
    const byteString = atob(base64String);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
  
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
  
    const blob = new Blob([ab], { type: mimeType });
    return new File([blob], filename, { type: mimeType });
  }


  ngOnInit(): void {
    this.getcatagory();
    this.getAllItem();
    this.getrescatagory();

    const message = localStorage.getItem('deleteMessage');
    if (message) {
      this.deleteMessage = message;
      localStorage.removeItem('deleteMessage'); // Clear the stored message
      window.scrollTo(0, 0); // Scroll to the top of the page
    }

    const message1 = localStorage.getItem('updateMessage');
    if (message1) {
      this.updateMessage = message1;
      localStorage.removeItem('updateMessage'); // Clear the stored message
      window.scrollTo(0, 0); // Scroll to the top of the page
    }

    const message2 = localStorage.getItem('createMessage');
    if (message2) {
      this.createMessage = message2;
      localStorage.removeItem('createMessage'); // Clear the stored message
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  }

  getcatagory(){
    this.service.viewcatagory().subscribe(data=>{
      console.log(data);
      this.catagory=data;
    });
    (error: any)=>console.log(error);
  }

  getrescatagory(){
   this.userDetail = this.tokenStorage.getUser();

  if (!this.userDetail || !this.userDetail.restaurantId) {
    console.error('Restaurant ID not found');
    return;
  }

  this.id = this.userDetail.restaurantId;

  this.service.viewrestaurentcatagery(this.id).subscribe({
    next: (data) => {
      console.log(data);
      this.restaurentCatagery = data;
    },
    error: (error) => {
      console.error('Error fetching restaurant categories', error);
    }
  });
  }

  getAllItem(){
    this.service.viewAllItem().subscribe(data=>{
      console.log(data);
      this.foods=data;
    });
    (error: any)=>console.log(error);
  }

  getItemById(id:any){
    debugger
    this.service.getItemById(id).subscribe(
      data=>{
        console.log(data);
       debugger
        this.name2=data;
        this.name2.categoryId=data.catagorybo.catagoryId;
        this.name2.restaurantCatagoryId=data.restaurantCatagoryBO.restaurantCatagoryId;
        console.log(data.catagorybo);
      });
  }


onFileSelected(event: any): void {
  this.selectedFile = event.target.files[0];
  
}

onSubmit(form: NgForm): void {
  debugger
 let cata=new Catagery();
 cata.catagoryId=this.item.categoryId;
   this.item.catagorybo=cata;
  let rest=new Restaurentcatagery();
 rest.restaurantCatagoryId=this.item.restaurantCatagoryId;
   this.item.restaurantCatagoryBO=rest;
  if (this.selectedFile && form.valid) {
    this.service
      .createItem(this.item, this.selectedFile)
      .subscribe(data => {
        console.log('Food created successfully:', data);
        // form.reset(); 
        localStorage.setItem('createMessage', 'Create successful!'); // Store message
    window.location.reload(); // Refresh the page
        
      });
  } else {
    console.error('Form is invalid or file is not selected');
    // this.createMessage = 'Item Creation failed. Please try again.';
    localStorage.setItem('createMessage', 'Item Creation failed. Please try again.'); // Store message
    window.location.reload(); // Refresh the page
  }
}

onFileUpdate(event: Event): void {
  debugger
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.name2.image = reader.result?.toString().split(',')[1] || '';
      const mimeType = file.type; // Use the MIME type of the original file
        const newFileName = file.name; // Use the original file name or change it as needed
        this.updateFile = this.base64ToFile(this.name2.image, newFileName, mimeType);

    };
    reader.readAsDataURL(file);
  }  else {
    
  }
}

updateItem(id: any): void {
  debugger
  const categoryId = this.name2.categoryId ?? 0;
  let cata=new Catagery();
 cata.catagoryId=categoryId;
   this.name2.catagorybo=cata;
   const restaurantCatagoryId = this.name2.restaurantCatagoryId ?? 0;
  let rest=new Restaurentcatagery();
 rest.restaurantCatagoryId=restaurantCatagoryId;
   this.name2.restaurantCatagoryBO=rest;
   if(null==this.updateFile){
    const currentImageBase64 = this.name2.image;
      const currentImageMimeType = "image/png"; // Adjust if necessary
      const currentImageFileName = "currentImage.png"; // Adjust if necessary

      this.updateFile = this.base64ToFile(currentImageBase64, currentImageFileName, currentImageMimeType);

   }
  if (this.updateFile && this.name2) {
    this.service.updateItem(id, this.name2, this.updateFile)
      .subscribe(response => {
        console.log('Update successful:', response);
        localStorage.setItem('updateMessage', 'Update successful!'); // Store message
    window.location.reload(); // Refresh the page
      }, error => {
        console.error('Error updating item:', error);
        // this.updateMessage = 'Update failed. Please try again.';
        localStorage.setItem('updateMessage', 'Update failed. Please try again.'); // Store message
    window.location.reload(); // Refresh the page
      });
  } else {
    console.error('No image data or item data missing');
    localStorage.setItem('updateMessage', 'No image data or item data missing'); // Store message
    window.location.reload(); // Refresh the page
  }
}

deleteItem(id:any){
  debugger
  this.service.deleteItem(id).subscribe(data=>{
    console.log(data);
    localStorage.setItem('deleteMessage', 'Delete successful!'); // Store message
    window.location.reload(); // Refresh the page
  })
}


}
