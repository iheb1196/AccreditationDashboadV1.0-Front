import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { PendingUsersComponent } from './pending-users/pending-users.component';
import { CoursesComponent } from './courses/courses.component';
import { AddcourseComponent } from './addcourse/addcourse.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { MyprofessorsComponent } from './myprofessors/myprofessors.component';
import { AllprofessorsComponent } from './allprofessors/allprofessors.component';


@NgModule({
  declarations: [DashboardComponent, HomeComponent, PendingUsersComponent, CoursesComponent, AddcourseComponent, UsersComponent, MycoursesComponent, MyprofessorsComponent, AllprofessorsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class DashboardModule { }
