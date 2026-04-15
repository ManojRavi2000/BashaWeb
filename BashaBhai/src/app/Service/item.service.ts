import { Injectable } from '@angular/core';
import { Catagery } from '../Models/catagery';
import { environment } from '../Environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../Models/item';
import { Restaurentcatagery } from '../Models/restaurentcatagery';

const AUTH_API=environment.API_URL+'/api/food';
const AUTH_API1=environment.API_URL+'/api/catagory';
const AUTH_API2=environment.API_URL+'/api/restaurantcatagory';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  [x: string]: any;

  constructor(private httpClient:HttpClient) { }

  getDinner(id:number):Observable<any>{
    debugger
    return this.httpClient.get(AUTH_API+`/getcatagoryfoodid/${id}`);
  }

  getItemById(id:number):Observable<any>{
    debugger
    return this.httpClient.get(AUTH_API+`/getfoodid/${id}`);
  }

  viewSpecialItem(name:any):Observable<any>{
    return this.httpClient.get(AUTH_API+`/getcatagoryfoodname/${name}`);
  }

  viewcatagory():Observable<Catagery[]>{
    return this.httpClient.get<Catagery[]>(AUTH_API1+`/getallcatagory`);
      }

      viewrestaurentcatagery(id:number):Observable<any>{
    debugger
    return this.httpClient.get(AUTH_API2+`/getallcatagory/${id}`);
  }

      viewAllItem():Observable<Item[]>{
        debugger
        return this.httpClient.get<Item[]>(AUTH_API+'/getfoodbyrestaurantid/1');
      }

      createItem(item:Item,file: File):Observable<any>{
        debugger
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('food', JSON.stringify(item));

        return this.httpClient.post(AUTH_API+'/createfood',formData)
        
      }   

      updateItem(id:any,item:Item,file: File):Observable<any>{
        const formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('food', JSON.stringify(item));
    
            return this.httpClient.post(AUTH_API+'/update/'+id,formData);

      }

      deleteItem(id:number):Observable<any>{
        debugger
        return this.httpClient.delete(AUTH_API+'/deletefood/'+id);

      }

      createCatagory(catagery:Restaurentcatagery):Observable<any>{
        return this.httpClient.post(AUTH_API2+'/createcatagory',catagery);
      }

      updateCatagory(id:any,catagory:Catagery):Observable<any>{
        debugger
        return this.httpClient.put(AUTH_API1+'/update/'+id,catagory)
      }

      getCatagoryById(id:any):Observable<any>{
        return this.httpClient.get(AUTH_API1+`/getcatagoryid/${id}`);
      }

      deleteCatagory(id:any):Observable<any>{
        return this.httpClient.delete(AUTH_API1+'/deletecatagory/'+id);
      }
}
