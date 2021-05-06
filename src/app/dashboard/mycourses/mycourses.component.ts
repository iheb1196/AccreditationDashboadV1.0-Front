import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  
  selectedCourse;

  myCourses: any [];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    console.log(username);
    
    this.getMyCourses();
  }
  uploadFile(selectedCourse){
    this.router.navigate(['/home/addcourses']);
    


  }
  getMyCourses(){
    this.api.myCourses().subscribe((data:any)=>{
      console.log(data);
      
      this.myCourses=data;
    })
  }

}
