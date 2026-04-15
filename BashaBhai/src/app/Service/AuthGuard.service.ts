import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { TokenStorageServiceService } from './token-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: TokenStorageServiceService, private router: Router) {}

  canActivate(): boolean {
    const token = this.auth.getToken();

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
