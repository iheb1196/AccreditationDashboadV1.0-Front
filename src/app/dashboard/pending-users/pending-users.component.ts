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



  pendingsUsers:any = [];
  roles = [
    { id : "PROGRAM DIRECTOR", value : "program director" },
    { id : "PROFESSOR", value : "professor" },
    { id : "COURSE COORDINATOR", value : "course coordinator" },
   
    
  ]

  filtredroles = [
    { id : "PROGRAM DIRECTOR", value : "program director" },
    { id : "PROFESSOR", value : "professor" },
    { id : "COURSE COORDINATOR", value : "course coordinator" },
    
  ]

 

  constructor(private api:ApiService) { 
    this.roleForm = new FormGroup({
      
      role: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    const role = localStorage.getItem('role');
    this.getNewUsersRequest();
  }

  filter(e){
    console.log(e.target.value);

    const q = e.target.value;

    this.filtredroles = this.roles.filter((e)=>{
      return (  e.value.indexOf(q) != -1  );
    })
    
  }
  

  getNewUsersRequest(){
    this.api.getNewUsersRequests().subscribe((data:any)=>{
      console.log(data);

      this.pendingsUsers = data;
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
     console.log(role);
     console.log(username);
     this.api.editUser(username,role).subscribe((data:any)=>{
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
