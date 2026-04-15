import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-restaurentheader',
  templateUrl: './restaurentheader.component.html',
  styleUrl: './restaurentheader.component.css'
})
export class RestaurentheaderComponent {
   role: any;

  navLinks = [
    { name: 'Catagory', url: '/restaurenthome', icon: 'bi-clipboard', active: true },
    { name: 'Shop', url: '/restaurentitem', icon: 'bi-cart-fill', active: false },
    { name: 'View Feedback', url: '/viewfeedback', icon: 'bi-chat-dots', active: false },
    { name: 'Profile', url: '/logout', icon: 'bi-person', active: false }
  ];

  constructor(private router: Router) {
    // Auto-highlight active menu on route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveByUrl(event.urlAfterRedirects);
      }
    });
  }

  setActiveByUrl(url: string) {
    this.navLinks.forEach(link => {
      link['active'] = url === link.url;
    });
  }

  onNavClick(link: any) {
    if (link.name === 'Profile') {
      // this.logout();
      this.router.navigate(['/logout']);
    } else {
      this.router.navigate([link.url]);
    }
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
