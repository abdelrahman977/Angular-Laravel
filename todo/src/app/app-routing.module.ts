import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddTaskComponent} from './add-task/add-task.component';
import {ViewTasksComponent} from './view-tasks/view-tasks.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'addTask', component: AddTaskComponent },
  { path: 'viewTasks', component: ViewTasksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }

]
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
export const routingComponents = [AddTaskComponent,ViewTasksComponent,LoginComponent,RegistrationComponent]