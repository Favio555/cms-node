import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url='cms/login';
  constructor(private http:HttpClient) {}
    
    singin(user:datos){
      return this.http.post(this.url,user)
    }
  
}
export interface datos{
  usuario?:string;
  contrasena?:string;
}
