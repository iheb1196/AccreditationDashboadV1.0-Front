import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-myprofessors',
  templateUrl: './myprofessors.component.html',
  styleUrls: ['./myprofessors.component.css']
})
export class MyprofessorsComponent implements OnInit {

  Users : any [];

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getMyProfessors();
  }

  getMyProfessors(){
    this.api.getMyProfessors().subscribe((data : any)=>{
      console.log(data);
      this.Users=data;


    })

  }

}
