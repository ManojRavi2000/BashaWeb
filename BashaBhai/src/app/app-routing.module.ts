import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { RestaurenthomeComponent } from './Components/Restaurent/restaurenthome/restaurenthome.component';
import { RestaurentitemsComponent } from './Components/Restaurent/restaurentitems/restaurentitems.component';
import { ShopComponent } from './Components/shop/shop.component';
import { AuthGuard } from './Service/AuthGuard.service';

const routes: Routes = [
     {path:"",component:HomeComponent},
        {path:"about",component:AboutusComponent},
        {path:"shop",component:ShopComponent},
        {path:"contact",component:ContactusComponent},
          {path:"login",component:LoginComponent},
          {path:"restaurenthome",component:RestaurenthomeComponent,canActivate: [AuthGuard],data: { role: 'ROLE_RESTAURANT' }},
          {path:"restaurentitem",component:RestaurentitemsComponent,canActivate: [AuthGuard],data: { role: 'ROLE_RESTAURANT' }},
          {path:"logout",component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
