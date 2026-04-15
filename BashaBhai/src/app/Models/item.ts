import { Catagery } from "./catagery";
import { Restaurentcatagery } from "./restaurentcatagery";

export class Item {
      foodId?:number;
    foodName?:String;
    price?:number;
    decription?:String;
    decription1?:String;
    decription2?:String;
    image!:string;
categoryId: any;
catagorybo?:Catagery;
restaurantCatagoryId:any;
restaurantCatagoryBO?:Restaurentcatagery;
}

