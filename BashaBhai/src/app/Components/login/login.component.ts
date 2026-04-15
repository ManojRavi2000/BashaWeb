import { Component } from '@angular/core';
import { Login } from '../../Models/login';
import { LoginService } from '../../Service/login.service';
import { DataSharingServiceService } from '../../Service/data-sharing-service.service';
import { Router } from '@angular/router';
import { TokenStorageServiceService } from '../../Service/token-storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   login = new Login();
  roles: string[] = [];
  isLoggedIn = false;

  constructor(private loginService: LoginService,
    private router: Router,private dataSharing: DataSharingServiceService, private tokenStorage: TokenStorageServiceService){}

    ngOnInit(): void {

    }

    public showPassword: boolean = false;

    message: any;

    
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  loginsubmit() {
    // this.spinner.show();
    debugger
    this.loginService.login(this.login).subscribe({
      next: (data) => {
        debugger
        console.log(data);
       
        if (null != data ) {
          debugger
          this.dataSharing.isLoggedIn.next(true);
          this.tokenStorage.saveToken(data.accessToken);
          localStorage.setItem("token", data.accessToken);
          this.tokenStorage.saveUser(data);
          debugger
          this.roles = this.tokenStorage.getUser().roles;
          var userrolesplit = this.roles[0].split("_");
          let currentUser = userrolesplit[1];
          debugger
          this.dataSharing.currentUserRole.next(currentUser);
          localStorage.setItem("myRole", this.roles[0])
         
          this.message = 'Login Successful!';
      
          if(this.roles[0]=="ROLE_ADMIN"){
          this.router.navigate(['adminhome'])
          }
           if(this.roles[0]=="ROLE_RESTAURANT"){
          this.router.navigate(['restaurenthome'])
          }
          if(this.roles[0]=="ROLE_CUSTOMER"){
            this.router.navigate([""])
            }
        }else{
          this.message='Invalid Credientials'
        }
      },
      error: (e) => {
        debugger
        // this.openSnackBar('Invalid Credentials!', 'OK');
        console.error(e)
      }
    });
    // this.spinner.hide();
  }

  

}
