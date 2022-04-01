



import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoquizComponent } from './demoquiz/demoquiz.component';
import { AddquestionsComponent } from './teacher/addquestions/addquestions.component';
import { QuestionComponent } from './teacher/question/question.component';
import { TeacherhomeComponent } from './teacher/teacherhome/teacherhome.component';
import { LoginStudentComponent } from './auth/login-student/login-student/login-student.component';
import { SignupStudentComponent } from './auth/login-student/signup-student/signup-student.component';
import { LoginTeacherComponent } from './auth/login-teacher/login-teacher/login-teacher.component';
import { SignupTeacherComponent } from './auth/login-teacher/signup-teacher/signup-teacher.component';
import { TeacherGuard } from './teacher.guard';
import { StudentGuard } from './student.guard';


const routes: Routes = [
  {path:"",component:HomeComponent},
{path:"home",component:HomeComponent},


{path:"demoquiz",component:DemoquizComponent },
{path:"question",component:QuestionComponent,canActivate: [TeacherGuard]},
{path:"addquestions",component:AddquestionsComponent,canActivate: [TeacherGuard]},
{path:"teacherhome",component:TeacherhomeComponent,canActivate: [TeacherGuard]},
{path:"login-student",component:LoginStudentComponent},
{path:"signup-student",component:SignupStudentComponent},
{path:"login-teacher",component:LoginTeacherComponent},
{path:"signup-teacher",component:SignupTeacherComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
