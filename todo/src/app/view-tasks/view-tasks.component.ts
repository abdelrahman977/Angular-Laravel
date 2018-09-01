import { Component, OnInit } from '@angular/core';
import { ViewTasksService } from './view-tasks.service'
import { task } from '../objects/task';
import { MatSnackBar } from '@angular/material';
import { SharedService } from '../shared-service.service';
@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css'],
  providers: [ViewTasksService]

})
export class ViewTasksComponent implements OnInit {
  toDoListArray: task[] = new Array;
  show: boolean;
  noTasks:boolean;
  constructor(private ViewtasksService: ViewTasksService, public snackBar: MatSnackBar, private _sharedService: SharedService) { }
  isRead: boolean = true;
  
  
  ngOnInit() {
    if (localStorage.getItem('guest') == 'true') {
      this.show = false;
    }
    else {
    this.show = true
      this.toDoListArray = new Array;
      this.ViewtasksService.viewtasks(localStorage.getItem('token')).subscribe(data => {
        this._sharedService.emitChange(data.length);
        if(data.length == 0) this.noTasks = true;
        else this.noTasks = false;
        for (let i = 0; i < data.length; i++) {
          this.toDoListArray.push(data[i])
        }

      });
    }


  }
  alterCheck(id: number, isChecked) {
    
    this.openSnackBar('Loading','')
    var index =this.toDoListArray.findIndex(x => x.id==id);
    this.toDoListArray[index].isChecked = !isChecked;
    this.ViewtasksService.checkOrUncheck(id, isChecked).subscribe(data => {
      this.openSnackBar(data['message'], 'Ok');
    })

  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      verticalPosition: 'top',
      duration: 4000,
    });
  }
  onDelete(id: number) {
    var index =this.toDoListArray.findIndex(x => x.id==id);
    this.toDoListArray.splice(index, 1);
    if(this.toDoListArray.length == 0) this.noTasks = true
    this._sharedService.emitChange(this.toDoListArray.length);
    this.openSnackBar('Loading','')
    this.ViewtasksService.deleteTask(id).subscribe(data => {
      this.openSnackBar(data['message'], 'Ok');
    })
  }
  onEdit(id:number,description:string) {
    if (this.isRead == false) {
      this.openSnackBar('Loading','')
      this.ViewtasksService.updateTask(id,description).subscribe(data => {
        console.log(data)
           
         this.openSnackBar(data['message'], 'Ok');
      })
    }
    this.isRead = !this.isRead
  }
}
