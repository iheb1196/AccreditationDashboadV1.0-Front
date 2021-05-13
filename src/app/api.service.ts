import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



  getNewUsersRequests(){

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':token
      })
    };
    return this.http.get(environment.apiEndPoint+'/app/getPendingsUsers',
    httpOptions
    
    )

  }
  myCourses(){
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username')


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':token

      })
    };
    return this.http.get(environment.apiEndPoint+'/app/getMyCourses',
    
    httpOptions
    
    )
    
  }
  getPrograms(){
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username')


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':token

      })
    };
    return this.http.get(environment.apiEndPoint+'/app/getPrograms',
    
    httpOptions
    
    )
    
  }
  getUsers(){

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':token
        
      
      })
    };
    return this.http.get(environment.apiEndPoint+'/app/getUsers',
    httpOptions
    
    )

  }
  getMyProfessors(){

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':token
        
      
      })
    };
    return this.http.get(environment.apiEndPoint+'/app/getMyProfessors',
    httpOptions
    
    )

  }
  getAllProfessors(){

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':token
        
      
      })
    };
    return this.http.get(environment.apiEndPoint+'/app/getAllProfessors',
    httpOptions
    
    )

  }

  getCourses(){

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':token
      })
    };
    return this.http.get(environment.apiEndPoint+'/app/getCourses',
    httpOptions
    
    )

  }


  acceptUser(id){
    


    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':token
      })
    };
    return this.http.get(environment.apiEndPoint+'/app/acceptUser?id='+id,
    httpOptions
    
    )
  }
  editUser(username,role,program){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(environment.apiEndPoint+'/app/editUser',
    {role:role,username:username,program:program},
    httpOptions
    
    )
    
  }
  


  deleteUser(id){
    
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':token
      })
    };
    return this.http.get(environment.apiEndPoint+'/app/deleteUser?id='+id,
    httpOptions
    
    )
  }


  getMyCourses(){
    

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':token
      })
    };
    return this.http.get(environment.apiEndPoint+'/app/mycourses',
    httpOptions
    
    )
  }
  assignCourses(username,email,coursename,term,role,year){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(environment.apiEndPoint+'/app/assignCourses',
    {
      username:username,
      email:email,
      coursename:coursename,
      term:term,
      role:role,
      year:year
      
    },
    httpOptions
    
    )
    
  }




}
