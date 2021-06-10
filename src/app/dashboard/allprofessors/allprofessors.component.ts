import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-allprofessors',
  templateUrl: './allprofessors.component.html',
  styleUrls: ['./allprofessors.component.css']
})
export class AllprofessorsComponent implements OnInit {
  Users : any [];

  courses: any[];

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getAllProfessors();
  }
  getAllProfessors(){
    this.api.getAllProfessors().subscribe((data : any[])=>{
      console.log(data);

      let newCoursesArray = [];

      for (let i = 0; i < data.length; i++) {
        const course = data[i];
        let newCourseWithProffersoosList = {
          coursename:course.coursename,
          year:course.year,
          term:course.term,
          proffesors:[
            { profferssorEmail: course.email, outcome:course.outcome, artifact: course.artifact }
          ]
        }

        for (let j = 0; j < data.length; j++) {
          const courseTotest = data[j];
          if( j!=i ){
            // i can strat testing
            if (( courseTotest.coursename == course.coursename )
              && ( courseTotest.term == course.term )
              && ( courseTotest.year == course.year )
            ) {
              // we have a match
              newCourseWithProffersoosList.proffesors.push(
                { profferssorEmail: courseTotest.email, outcome:courseTotest.outcome, artifact: courseTotest.artifact }
              )
              
            }

          }
          
        }

        newCoursesArray.push(newCourseWithProffersoosList);


        
      }

      let lastArray = [];

      console.log("we made it",newCoursesArray);
      for (let i = 0; i < newCoursesArray.length; i++) {
        const course2 = newCoursesArray[i];
        
        if (lastArray.length == 0) {
          lastArray.push(course2);
        }else{
          let weCanAddIt = true;

          for (let j = 0; j < lastArray.length; j++) {
            const courseTotest2 = lastArray[j];
            
              if (( courseTotest2.coursename == course2.coursename )
                && ( courseTotest2.term == course2.term )
                && ( courseTotest2.year == course2.year )
              ) {
                // we have a match we skip
                weCanAddIt = false;
              }
  
            
            
          }

          if (weCanAddIt) {
            lastArray.push(course2);
          }
        }

        
      }
      console.log("ok",lastArray);





      //this.Users=data;
      this.courses = lastArray;

    })

  }

}
