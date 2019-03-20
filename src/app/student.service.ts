import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
student={rollNo:1,birthDate:"",firstName:"",lastName:"",parentName:"",parentNumber:5656,address:""}


students=[{rn:0,birthDate:"13/02/2019",firstName:"jaya",lastName:"lakshmi",parentName:"kannagi",parentNumber:9787324523,address:"hsr"},
{rn:1,birthDate:"14/02/2019",firstName:"deepika",lastName:"kannikar",parentName:"veena",parentNumber:96777324523,address:"karanataka"},
{rn:2,birthDate:"15/02/2019",firstName:"shakthi",lastName:"gokul",parentName:"sridevi",parentNumber:9787324523,address:"tamil"},
{rn:3,birthDate:"16/02/2019",firstName:"prem",lastName:"kumar",parentName:"kannagi",parentNumber:9787324523,address:"hsr"}]
  constructor() {
    var defaultStudents = JSON.parse(localStorage.getItem('student'));
    if(defaultStudents){
      this.students=defaultStudents;
    }
    else{
      localStorage.setItem('student',JSON.stringify(this.students));
    }
   }
  getStudent(){
    return this.students;

  }

  addStudent(student){
    console.log(student)
    this.students.push(student);
    localStorage.setItem('student',JSON.stringify(this.students));
  }
  deleteStudent(rn){
    for(var i=0;i<this.students.length;i++){
      if(rn==this.students[i].rn){
        this.students.splice(i,1);
      
      }
    }
    
  }
  }
