import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service'
import { user } from './objects/user';
import { MatSnackBar } from '@angular/material';
import { SharedService } from './shared-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loginservice: LoginService,public snackBar: MatSnackBar,private _sharedService: SharedService) { _sharedService.changeEmitted$.subscribe(
    taskN => {
        this.TasksNumber= taskN;
    }); }
  title = 'app';
  currentUser :user = new user;
  TasksNumber = 0;
  ngOnInit(): void {
    if(!(localStorage.getItem('token') == null))
    this.loginservice.getCurrentUser(localStorage.getItem('token')).subscribe(data => {
      this.loginservice.viewtasks(localStorage.getItem('token')).subscribe(data => {
        this.TasksNumber = data.length;
      });
      this.currentUser.username = data.username;
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
