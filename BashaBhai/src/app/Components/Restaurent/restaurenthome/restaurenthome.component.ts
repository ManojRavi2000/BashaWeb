import { Component } from '@angular/core';
import { Catagery } from '../../../Models/catagery';
import { ItemService } from '../../../Service/item.service';
import { Router } from '@angular/router';
import { Restaurentcatagery } from '../../../Models/restaurentcatagery';
import { TokenStorageServiceService } from '../../../Service/token-storage-service.service';
import { Loginuser } from '../../../Models/loginuser';

@Component({
  selector: 'app-restaurenthome',
  templateUrl: './restaurenthome.component.html',
  styleUrl: './restaurenthome.component.css'
})
export class RestaurenthomeComponent {
catagory1?:Catagery[];
 userDetail!:Loginuser;
 id!:number;
  createMessage: string = '';
    restaurentCatageryList?:Restaurentcatagery[];
  restaurantCatagery:Restaurentcatagery=new Restaurentcatagery();
  newCategory: Catagery = new Catagery();
  viewCaegory:Catagery=new Catagery();
selectedFile: File | null = null;
  constructor(private service:ItemService,private router:Router,private tokenStorage: TokenStorageServiceService){}

  ngOnInit(): void {
    this.getcatagory();
    this.getrescatagory();
    
  }
onFileSelected(event: any): void {
  this.selectedFile = event.target.files[0];
  
}
  getcatagory(){
    this.service.viewcatagory().subscribe(data=>{
      console.log(data);
      this.catagory1=data;
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
      this.restaurentCatageryList = data;
    },
    error: (error) => {
      console.error('Error fetching restaurant categories', error);
    }
  });
  }


  saveCatagory(){
    debugger
     this.userDetail = this.tokenStorage.getUser();

  if (!this.userDetail || !this.userDetail.restaurantId) {
    console.error('Restaurant ID not found');
    return;
  }

    this.restaurantCatagery.restaurantBo.restaurantId =
    this.userDetail.restaurantId;
    this.service.createCatagory(this.restaurantCatagery).subscribe((data)=>{
      this.restaurantCatagery=new Restaurentcatagery();
      this.getrescatagory();
    }), (error: any)=>console.log(error);
  }

  getCatagoryById(id:any){
    debugger
    this.service.getCatagoryById(id).subscribe(data=>{
      console.log(data);
      this.viewCaegory=data;
    })
  }



  updateCatagory(id:any){
    debugger
    
    this.service.updateCatagory(id,this.viewCaegory).subscribe(data=>{
      console.log('update successfull !!',data);
    }), (error: any)=>console.log(error);
  }

  deleteCatagory(id:any){
    this.service.deleteCatagory(id).subscribe(data=>{
      console.log(data);
    })
  }

}
