import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../objects/user';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  

    signup(user:user){
      
      return  this.http.post('http://localhost:8000/api/signup',{username:user.username,email:user.email,password:user.password})}
}
