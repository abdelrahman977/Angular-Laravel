import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service'
import { user } from './objects/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loginservice: LoginService) { }
  title = 'app';
  currentUser :user = new user;
  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
    if(!(localStorage.getItem('token') == null))
    this.loginservice.getCurrentUser(localStorage.getItem('token')).subscribe(data => {
      this.currentUser.username = data.username;
      console.log(data);
    });
    else{
      this.currentUser.username = 'guest';
      this.currentUser.password = 'guest';
      localStorage.setItem('guest','true');
      
    }
  }
 


}