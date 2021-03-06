import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../objects/user';
import { task } from '../objects/task';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  
  getCurrentUser(token:string){
    return  this.http.get<user>('http://localhost:8000/api/getCurrentUser?token='+token)}

    login(user:user){
      
      return  this.http.post('http://localhost:8000/api/signin',{email:user.email,password:user.password})}
      viewtasks(token: string) {
        return this.http.get<task[]>('http://localhost:8000/api/getTasks?token=' + token)
      }
    }
