import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { RestaurentheaderComponent } from './Components/Restaurent/restaurentheader/restaurentheader.component';
import { RestaurenthomeComponent } from './Components/Restaurent/restaurenthome/restaurenthome.component';
import { RestaurentitemsComponent } from './Components/Restaurent/restaurentitems/restaurentitems.component';
import { ShopComponent } from './Components/shop/shop.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
      AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ShopComponent,
    ContactusComponent,
    LoginComponent,
    RestaurentheaderComponent,
    RestaurenthomeComponent,
    RestaurentitemsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
