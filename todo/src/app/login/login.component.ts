import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from './login.service'
import { user } from '../objects/user'
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService,public snackBar: MatSnackBar) { }
  user:user = new user
  show :boolean;
  @Input() currentUserr: string;
  @Output() currentUser = '';

  ngOnInit() {
   
     if (localStorage.getItem('guest')== 'true'){
      this.show = true;
     } 
     else this.show = false
  }
  onLogin(){
    this.openSnackBar('Loading','')
    this.loginservice.login(this.user).subscribe(data => {
      if(data['error'] == undefined){
      localStorage.setItem('token',data['token']);
      localStorage.removeItem('guest');
      this.openSnackBar('successfully logged in', 'Ok')
      setTimeout( () => { location.reload() }, 2000 );
      }
      else  this.openSnackBar(data['error'],"Ok");
    });

  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      verticalPosition: 'top',
      duration: 2500,
    });
  }
  onLogout(){
      localStorage.setItem('guest','true');
      localStorage.removeItem('token');
      location.reload()
  }
}
