import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingServiceService {
  constructor() { }
  role:any;
   public isLoggedIn:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
 
   // BehaviorSubject to store UserRole
   public currentUserRole = new BehaviorSubject<string>("");
 
   // Make UserRole store Observable
   public currentUser = this.currentUserRole.asObservable();
 
 
}
