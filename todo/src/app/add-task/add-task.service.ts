import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { task } from '../objects/task';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

  constructor(private http: HttpClient) { }
  
  
  addTask(task:task,token:string){
    return  this.http.post<task>('http://localhost:8000/api/addTask?token='+token,{title:task.title,description:task.description,isChecked:false})
  }
}
