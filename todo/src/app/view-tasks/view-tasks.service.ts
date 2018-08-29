import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../objects/user';
import { Token } from '@angular/compiler';
import { task } from '../objects/task';

@Injectable({
  providedIn: 'root'
})
export class ViewTasksService {

  constructor(private http: HttpClient) { }


  viewtasks(token: string) {
    return this.http.get<task[]>('http://localhost:8000/api/getTasks?token=' + token)
  }
  checkOrUncheck(id:number,isChecked:number){
    return this.http.patch('http://localhost:8000/api/checkOrUncheck',{id:id,isChecked:isChecked})
}
deleteTask(id:number){
  return this.http.patch('http://localhost:8000/api/deleteTask',{id:id})
}
updateTask(id:number,description:string){
  return this.http.patch('http://localhost:8000/api/updateTask',{id:id,description:description})
}

}
  

