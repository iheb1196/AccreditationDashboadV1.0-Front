import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu = []

  pendingsUsers:any = [];
  username = localStorage.getItem('username');

  constructor(private api:ApiService, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    const role = localStorage.getItem('role');

    switch (role) {
      case 'admin':
        this.menu = [{
          title: "New Users Requests",
          counter: 0,
          link: '/dashboard/home/pendings',
          subMenus: []
        },

        {
          title: "Users",
          counter: 0,
          link: '/dashboard/home/users',
          subMenus: []
        },
        ]
        break;

      case 'PROFESSOR':
        this.menu = [
        {
          title: "My courses",
          counter: 0,
          link: '/home/mycourses',
          subMenus: []
        },


        ]


        break;  

      default:
        break;
    }


    this.getNewUsersRequest();
  }




  getNewUsersRequest(){
    this.api.getNewUsersRequests().subscribe((data:any)=>{
      console.log(data);

      this.pendingsUsers = data;

      // init data table
      this.menu[0].counter = data.length;
      
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



  logout(){
    //this.auth.logout().subscribe((data:any)=>{
     // console.log(data);
      //if (data.success) {
        localStorage.clear();
        // router => signin

        this.router.navigate(['/signin'])

      }
      
    //})
 // }

  
}
