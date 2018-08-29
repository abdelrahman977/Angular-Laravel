import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service'
import { user } from './objects/user';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loginservice: LoginService,public snackBar: MatSnackBar) { }
  title = 'app';
  currentUser :user = new user;
  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
    if(!(localStorage.getItem('token') == null))
    this.loginservice.getCurrentUser(localStorage.getItem('token')).subscribe(data => {
      this.currentUser.username = data.username;
      console.log(data);
    },error => { 
      this.guestLogin();
      localStorage.removeItem('token')
      location.reload() });
    else{
     this.guestLogin();
    }
  }
  guestLogin(){
    this.currentUser.username = 'guest';
    this.currentUser.password = 'guest';
    localStorage.setItem('guest','true');
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      verticalPosition: 'top',
      duration: 4000,
    });
  }


}
