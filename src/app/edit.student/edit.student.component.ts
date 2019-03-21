import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit.student',
  templateUrl: './edit.student.component.html',
  styleUrls: ['./edit.student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private studentService: StudentService,private router:Router) { }
  id: number;
  private sub: any;
  student:any={};
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['rn']; 
      console.log("rn is " + this.id);
      this.student = this.studentService.getStudentByRollNo(this.id);

    });
  }
  updateStudent(student){
    this.studentService.updateStudent(student);
    this.router.navigate(['./listStudent']);
}
}
