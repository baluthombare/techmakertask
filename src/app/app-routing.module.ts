import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCompseronent } from './task/task.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/task',pathMatch:'full'
  },
  {
    path:'task',component:TaskCompseronent
  },
  {path:'add',component:AddComponent},
  {path:'add/:id' ,component:AddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
