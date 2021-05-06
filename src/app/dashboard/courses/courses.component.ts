import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:any = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getMyCourses();
  }


  getMyCourses(){
    this.api.getMyCourses().subscribe((data)=>{
      console.log(data);

      this.courses = data;
      
    })
  }

}
