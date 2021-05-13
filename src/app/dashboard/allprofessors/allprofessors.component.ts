import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-allprofessors',
  templateUrl: './allprofessors.component.html',
  styleUrls: ['./allprofessors.component.css']
})
export class AllprofessorsComponent implements OnInit {
  Users : any [];

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getAllProfessors();
  }
  getAllProfessors(){
    this.api.getAllProfessors().subscribe((data : any)=>{
      console.log(data);
      this.Users=data;


    })

  }

}
