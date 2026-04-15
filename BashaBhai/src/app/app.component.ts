import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BashaBhai';
  role:any;
  ngDoCheck(){

    
    if(localStorage.getItem('myRole')){
  
      this.role=localStorage.getItem('myRole');
    }
  }
}
