import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

 role: any;

  navLinks = [
    { name: 'Home', url: '/', active: true, fontWeight: '500' },
    { name: 'About us', url: '/about', active: false, fontWeight: 'normal' },
    { name: 'Shop', url: '/shop', active: false, fontWeight: 'normal' },
    { name: 'Contact Us', url: '/contact', active: false, fontWeight: 'normal' },
    { name: 'Login', url: '/login', active: false, fontWeight: 'normal' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // 🔥 set active menu on page refresh
    this.setActiveByUrl(this.router.url);

    // 🔥 also update when route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveByUrl(event.urlAfterRedirects);
      }
    });
  }

  setActive(link: any) {
    this.navLinks.forEach(l => {
      l.active = false;
      l.fontWeight = 'normal';
    });

    link.active = true;
    link.fontWeight = '500';
    this.router.navigate([link.url]);
  }

  private setActiveByUrl(url: string) {
    this.navLinks.forEach(l => {
      if (l.url === url) {
        l.active = true;
        l.fontWeight = '500';
      } else {
        l.active = false;
        l.fontWeight = 'normal';
      }
    });
  }

}
