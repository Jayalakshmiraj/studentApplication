import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-list.student',
  templateUrl: './list.student.component.html',
  styleUrls: ['./list.student.component.css']
})
export class ListStudentComponent implements OnInit {
    studentarray=[];
  constructor(public router:Router,private studentService:StudentService) { }

  ngOnInit() {
    this.studentarray=this.studentService.getStudent();
  }
  deleteStudent(s){
    this.studentService.deleteStudent(s.rn)
  }
  deleteStudentAll(){
    this.studentarray=[];
    localStorage.setItem('student',JSON.stringify(this.studentarray));
  }
  selectStudent(id){
    console.log(id)
    this.router.navigate(['./editStudent',+id]);
  }
}
