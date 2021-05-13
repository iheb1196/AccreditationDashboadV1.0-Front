import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AllprofessorsComponent } from './allprofessors/allprofessors.component';
import { CoursesComponent } from './courses/courses.component';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { MyprofessorsComponent } from './myprofessors/myprofessors.component';
import { PendingUsersComponent } from './pending-users/pending-users.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'home', component:HomeComponent , children:[
    { path:'', component:PendingUsersComponent },
    { path:'pendings', component:PendingUsersComponent },
    { path:'users', component:UsersComponent  },
    { path:'courses', component:CoursesComponent  },
    { path:'addcourses', component:AddcourseComponent  },
    { path :'mycourses',component:MycoursesComponent},
    { path:'myprofessors',component:MyprofessorsComponent},
    { path :'allprofessors',component:AllprofessorsComponent}
    
    
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
