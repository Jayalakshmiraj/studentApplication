import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
student=[];
  constructor(public router:Router,private studentService:StudentService) { }

  ngOnInit() {
    this.student=this.studentService.getStudent();
  }


  addStudent(){
    this.studentService.addStudent(this.student);
    this.router.navigate(['./listStudent'])
  }
  
}
