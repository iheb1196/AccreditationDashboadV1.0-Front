import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  FileTodUpload:File;

  addCourseForm = new FormGroup({
    course: new FormControl("")
  })

  constructor(private http:HttpClient) { }


  fileChange(e){
    console.log(e);
    this.FileTodUpload=e.target.files[0]

    if (e.target.files.length === 0)
      return;
 
    /*var mimeType = e.target.files[0].type;
    if (mimeType.match(/image\/) == null) {
      return;
    }*/
 
    var reader = new FileReader();
    
    reader.readAsDataURL(e.target.files[0]); 
    reader.onload = (_event) => { 
      
      
      
       
      
    }
  }


  uploadToserver(data:FormData){
    
    return this.http.post<any>('http://localhost:3000/app/uploadfile',data,{
      headers:new HttpHeaders({
        
      })
    });
  }


   uploadFile(){
    
    var form = new FormData();
    form.append("filetoupload", this.FileTodUpload, this.FileTodUpload.name);
    form.append("course", this.addCourseForm.value.course);
    form.append("token", localStorage.getItem('token'));
    
    

    console.log(this.FileTodUpload);
    
    this.uploadToserver(form).subscribe((data)=>{
      console.log(data);
      
      
    },(error)=>{
      console.log(error);
      
    })
  }





  ngOnInit(): void {
  }

}
