import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Models/login';
import { environment } from '../Environment/environment';

const AUTH_API=environment.API_URL+'/api/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private httpClient : HttpClient) { }
 
  login(login: Login):Observable<any> {
    debugger
    return this.httpClient.post(AUTH_API+'/v1/login',login);
  }
}
