import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pending-users',
  templateUrl: './pending-users.component.html',
  styleUrls: ['./pending-users.component.css']
})
export class PendingUsersComponent implements OnInit {

  roleForm: FormGroup;
  userForm: FormGroup;
  selectedUser;
  expression = true ;
  pendingsUsers:any = [];
  Courses:any=[];
  programs:any = [];
  roles = [
    { id : "PROGRAM DIRECTOR", value : "program director" },
    { id : "PROFESSOR", value : "professor" },
    { id : "COURSE COORDINATOR", value : "course coordinator" },
   
    
  ]
  constructor(private api:ApiService) { 
    this.roleForm = new FormGroup({
      
      role: new FormControl('', [Validators.required]),
      program: new FormControl(''),
      course_coordinate :new FormControl(''),
    });
    
    this.userForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
    })

  }
  ngOnInit(): void {
    const role = localStorage.getItem('role');
    this.getNewUsersRequest();
  }
  selectUser(selectedUser){
    this.userForm.setValue({
      username : this.selectedUser.username,
      email : this.selectedUser.email
    })
    
  }
  getNewUsersRequest(){
    this.api.getNewUsersRequests().subscribe((data:any)=>{
      console.log(data);

      this.pendingsUsers = data;
    })
  }
  getPrograms(){
    this.api.getPrograms().subscribe((data:any) => {
      this.programs = data ;
    })
  }
  getCourses(){
    this.api.getCourses().subscribe((data:any)=>{
      this.Courses=data;

    })
  }
  deleteUser(id){
    console.log(id);

    if (confirm("do your really wanna delete this user")) {
      this.api.deleteUser(id).subscribe((data:any)=>{
        if (data.success === true) {
          this.getNewUsersRequest();
        }else{
          alert("oups")
        }
      },(err)=>{
        alert("oups")
      })
    }
    
  }
 editUser(username) {
     const role = this.roleForm.value.role;
     const program = this.roleForm.value.program;
     
     this.api.editUser(username,role,program).subscribe((data:any)=>{
       console.log(data);
       
     })
     
     

  }
  acceptUser(id){
    
    
    console.log(id);  
    

    if (confirm("do your really wanna accept this user")) {
      this.api.acceptUser(id).subscribe((data:any)=>{
        if (data.success === true) {
          this.getNewUsersRequest();
        }else{
          alert("oups")
        }
      },(err)=>{
        alert("oups")
      })
    }
    
  }
}
