import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {Router} from '@angular/router';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  
  selectedCourse;

  myCourses: any [];
  FilesTodUpload:File[];
  courseForm : FormGroup;
  
  

  
  

  constructor(private api:ApiService, private router:Router,private http:HttpClient) { 
    this.courseForm = new FormGroup({
      coursename : new FormControl('',[Validators.required]),
      term : new FormControl('',[Validators.required]),
      year : new FormControl('',[Validators.required])

    

    })
   
  }

  fileChange(e){
    console.log(e);
    this.FilesTodUpload=e.target.files;

    /*if (e.target.files.length === 0)
      return;
 
    var reader = new FileReader();
    
    reader.readAsDataURL(e.target.files[0]); 
    reader.onload = (_event) => { 
      
      
    }*/
  }


  uploadToserverOutcome(data:FormData){
    
    return this.http.post<any>('http://localhost:7000/app/uploadOutcome',data,{
      headers:new HttpHeaders({
        
      })
    });
  }

  uploadToserverAriticat(data:FormData){
    
    return this.http.post<any>('http://localhost:7000/app/uploadArtificat',data,{
      headers:new HttpHeaders({
        
      })
    });
  }




   uploadOutcome(){
    
    var form = new FormData();

    for (let i = 0; i < this.FilesTodUpload.length; i++) {
      const file = this.FilesTodUpload[i];
      form.append("outcome"+i, file, file.name);
      
    }
    
    form.append("fileslength", this.FilesTodUpload.length+"");
    form.append("coursename", this.courseForm.value.coursename);
    form.append("term",this.courseForm.value.term);
    form.append("year",this.courseForm.value.year);
    form.append("_id",this.selectedCourse._id);
    
    form.append("token", localStorage.getItem('token'));
    
    

    //console.log(this.FileTodUpload);
    console.log("hello");
    
    
    this.uploadToserverOutcome(form).subscribe((data)=>{
      console.log("hi");
      
      console.log(data);
      
      
    },(error)=>{
      console.log(error);
      
    })
  }
  uploadArtificat(){
    /*
    var form = new FormData();
    
    form.append("filetoupload", this.FileTodUpload, this.FileTodUpload.name);
    form.append("coursename", this.courseForm.value.coursename);
    form.append("term",this.courseForm.value.term);
    form.append("year",this.courseForm.value.year);
    form.append("_id",this.selectedCourse._id);
    
    form.append("token", localStorage.getItem('token'));
    
    

    console.log(this.FileTodUpload);
    console.log("hello");
    
    
    this.uploadToserverAriticat(form).subscribe((data)=>{
      console.log("hi");
      
      console.log(data);
      
      
    },(error)=>{
      console.log(error);
      
    })*/
  }


  ngOnInit(): void {
    const username = localStorage.getItem('username');
    console.log(username);
    
    this.getMyCourses();
  };
 // uploadFile(selectedCourse){
    //this.router.navigate(['/home/addcourses']);
    


  //}
  selectCourse(selectedCourse) {
    console.log(this.selectedCourse);
   
    
    
    this.courseForm.setValue({
      coursename: this.selectedCourse.coursname,
      term : this.selectedCourse.term,
      year : this.selectedCourse.year
      
      
      
      
     
    });
  }
  getMyCourses(){
    this.api.myCourses().subscribe((data:any)=>{
      console.log(data);
      
      this.myCourses=data;
    })
  }
  

  getP(i){
    console.log(i);

    let p = 0;

    const course = this.myCourses[i];

    if (course. outcome !=  null) {
      p+=50;
    }

    
    if (course. artifact !=  null) {
      p+=50;
    }


    return p;
    
  }
 

}
