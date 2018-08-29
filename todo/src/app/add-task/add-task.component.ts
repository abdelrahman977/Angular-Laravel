import { Component, OnInit } from '@angular/core';
import { AddTaskService } from './add-task.service';
import { task } from '../objects/task';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [AddTaskService]

})
export class AddTaskComponent implements OnInit {
  constructor(private AddtaskService: AddTaskService,public snackBar: MatSnackBar) { }
  myTask :task = new task;
  show :boolean;
  onAdd() {
    //console.log(this.itemTitle)
    this.AddtaskService.addTask(this.myTask,localStorage.getItem('token')).subscribe(data => {
      this.openSnackBar(data['message'],'Ok');
    },error =>this.openSnackBar(error['error'].message +' Check *','Ok'));
    //this.itemTitle = '';
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      verticalPosition: 'top',
      duration: 4000,
    });
  }

  ngOnInit() {
    if (localStorage.getItem('guest')== 'true'){
      this.show = false;
     } 
     else this.show = true
  }

}
