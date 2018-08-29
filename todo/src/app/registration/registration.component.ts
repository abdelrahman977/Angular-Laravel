import { Component, OnInit } from '@angular/core';
import { user } from '../objects/user'
import{ RegistrationService } from './registration.service'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService :RegistrationService,public snackBar: MatSnackBar) { }
  newUser: user = new user
  ngOnInit() {


  }
  onAddNewUser() {
    this.openSnackBar('Loading','')
    this.registrationService.signup(this.newUser).subscribe(data => {   
      this.openSnackBar(data['message'],'Ok')
    },error =>this.openSnackBar(error['error'].message +' Check *','Ok') 
  );
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      verticalPosition: 'top',
      duration: 4000,
    });
  }
}
