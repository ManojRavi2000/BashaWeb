import { Component, ElementRef, ViewChild } from '@angular/core';
import { Item } from '../../Models/item';
import { Catagery } from '../../Models/catagery';
import { ItemService } from '../../Service/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   name1:any;
  name2=new Item();
  catagory?:Catagery[];
   selectedCategory!: Catagery;
  foods!:Item[];
  specialFoods:any;
  spicyFoods:any;
 id=1;
  name='biryani';
  // imageValue:any;
  constructor(private service:ItemService){}
  // @ViewChild('scrollContent', { static: false }) scrollContent!: ElementRef;
  // ngAfterViewInit(): void {
  //   const scrollDiv = this.scrollContent.nativeElement;

  //   setInterval(() => {
  //     if (scrollDiv.scrollLeft === 0) {
  //       scrollDiv.scrollLeft = scrollDiv.scrollWidth; 
  //     } else {
  //       scrollDiv.scrollLeft -= 1; 
  //     }
  //   }, 30); 
  
  
  // }

  ngOnInit(): void {
    this.getcatagory();
   this.getAllItem();
   this.getSpecialItem(this.name);

  //  this.getSpicyItem('Lunch');
  //  this.getItemById(this.id);
  }

  getcatagory(){
    this.service.viewcatagory().subscribe(data=>{
      console.log(data);
      this.catagory=data;
          if (this.catagory && this.catagory.length > 0) {
      this.selectedCategory = this.catagory[0];

      // 🔥 Load items of first category automatically
      this.getDinner(this.catagory[0].catagoryId);
    }
    });
    (error: any)=>console.log(error);
  }

  getAllItem(){
    debugger
    this.service.viewAllItem().subscribe(data=>{
      console.log(data);
      this.foods=data;
    });
    (error: any)=>console.log(error);
  }

  getSpecialItem(name:any){
    this.service.viewSpecialItem(name).subscribe(data=>{
      console.log(data);
     
      this.specialFoods=data;
    })
  }
  getSpicyItem(name:any){
    this.service.viewSpecialItem(name).subscribe(data=>{
      console.log(data);
     
      this.spicyFoods=data;
    })
  }
  getDinner(id:any){
    debugger
    this.service.getDinner(id).subscribe(
      data=>{
        console.log(data);
        this.name1=data;});
  }

  getItemById(id:any){
    debugger
    this.service.getItemById(id).subscribe(
      data=>{
        console.log(data);
        this.name2=data;});
  }


  @ViewChild('scrollContainer', { static: false })
scrollContainer!: ElementRef;

scrollLeft() {
  this.scrollContainer.nativeElement.scrollLeft -= 200;
}

scrollRight() {
  this.scrollContainer.nativeElement.scrollLeft += 200;
}

  redirectToWhatsApp() {
  const phoneNumber = '+971528031100'; // No + symbol in wa.me
  
  const message = encodeURIComponent(
    `Hello 👋
I would like to book a table.

Name:
Date:
Time:
Number of Persons:

Please confirm availability.`
  );

  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
}


}
