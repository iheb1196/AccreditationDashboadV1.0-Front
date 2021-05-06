import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Users:any = [];
  Courses:any=[];
  userForm: FormGroup;
  selectedUser;
  courseForm: FormGroup;
  selectedCourse;


  
  


  constructor(private api:ApiService) {
    
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      
      
      
      
      
    });
    this.courseForm = new FormGroup ({
      coursename : new FormControl('',[Validators.required]),
      term: new FormControl('',[Validators.required]),
      year : new FormControl('',[Validators.required]),

    })
   }
   

  ngOnInit(): void {
    const role = localStorage.getItem('role');
    this.getUsers();
    this.getCourses();
    
    
    
    console.log(this.selectedUser);
    console.log(this.selectedCourse);
  }
  selectUser(selectedUser) {
    console.log(this.selectedUser);
   
    
    
    this.userForm.setValue({
      username: this.selectedUser.username,
      
      
      
      
     
    });
  }
  getUsers(){
    this.api.getUsers().subscribe((data:any)=>{
      console.log(data);

      this.Users = data;
    })
  }
  getCourses(){
    this.api.getCourses().subscribe((data:any)=>{
      console.log(data);

      this.Courses = data;
    })
  }
  deleteUser(id){
    console.log(id);

    if (confirm("do your really wanna delete this user")) {
      this.api.deleteUser(id).subscribe((data:any)=>{
        if (data.success === true) {
          this.getUsers();
        }else{
          alert("oups")
        }
      },(err)=>{
        alert("oups")
      })
    }
    
  }
  assignCourses(){
    const username = this.selectedUser.username;
    const coursename = this.courseForm.value.coursename;
    const term= this.courseForm.value.term;

    
    const email = this.selectedUser.email;
    
    const role = this.selectedUser.role;
    //const program = this.selectedCourse.program;
    const year =this.courseForm.value.year;
    

    this.api.assignCourses(username,email,coursename,term,role,year).subscribe((data:any)=>{
      console.log(data);
      

      alert(data.message);
      
    })

    
  }

}
