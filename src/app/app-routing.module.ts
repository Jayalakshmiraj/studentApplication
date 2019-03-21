import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ListStudentComponent } from './list.student/list.student.component';
import { EditStudentComponent } from './edit.student/edit.student.component';

const routes: Routes = [
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'listStudent',
    component:ListStudentComponent
  },
  {
    path:'editStudent/:rn',
    component:EditStudentComponent
  },
  {
  path:"",
  pathMatch:"full" ,
  redirectTo:'student' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
