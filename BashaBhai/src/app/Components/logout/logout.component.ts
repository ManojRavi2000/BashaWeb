import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageServiceService } from '../../Service/token-storage-service.service';
import { Loginuser } from '../../Models/loginuser';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  user: any;
  userDetail!:Loginuser;

  constructor( private router: Router,private tokenStorage: TokenStorageServiceService){}
  ngOnInit(): void {
    this.user = this.getUser(); // Initialize user details

  }

  logOut(){
    debugger
    this.tokenStorage.signOut();
    localStorage.removeItem('myRole');
    this.router.navigate(['/']).then(() => {
      window.location.reload();  // Forces the page to reload
    });    
  }

  getUser() {
    // Retrieve user details from tokenStorage
    const user = this.tokenStorage.getUser();
    this.userDetail=user;

    // Optionally, you can handle cases where user might be null or undefined
    if (user) {
      
      console.log('User details:', user);
      return user;
    } else {
      console.log('No user details found');
      return null;
    }
  }
 

}
