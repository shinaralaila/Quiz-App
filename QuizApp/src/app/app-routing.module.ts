import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoquestionsComponent } from './demoquestions/demoquestions.component';
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
import { QuizComponent } from './teacher/quiz/quiz.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ViewteacherComponent } from './admin/viewteacher/viewteacher.component';
import { ViewstudentComponent } from './admin/viewstudent/viewstudent.component';
import { StudenthomeComponent } from './student/studenthome/studenthome.component';
import { ResultComponent } from './student/result/result.component';

import { EditComponent } from './teacher/edit/edit.component';
import { Qlevel1Component } from './student/qlevel1/qlevel1.component';
import { AdminqnsComponent } from './admin/adminqns/adminqns.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
{path:"home",component:HomeComponent},


{path:"demoquiz",component:DemoquizComponent },
{path:"demoquestions",component:DemoquestionsComponent},
{path:"question",component:QuestionComponent,canActivate: [TeacherGuard]},
{path:"addquestions",component:AddquestionsComponent,canActivate: [TeacherGuard]},
{path:"teacherhome",component:TeacherhomeComponent,canActivate: [TeacherGuard]},
{path:"login-student",component:LoginStudentComponent},
{path:"signup-student",component:SignupStudentComponent},
{path:"login-teacher",component:LoginTeacherComponent},
{path:"signup-teacher",component:SignupTeacherComponent},
{path:"homequiz",component:QuizComponent,canActivate: [TeacherGuard]},
{path:"adminhome",component:AdminhomeComponent},
{path:"studenthome",component:StudenthomeComponent},
{path:"viewstudent",component:ViewstudentComponent},
{path:"viewteacher",component:ViewteacherComponent},
{path:"qlevel1",component:Qlevel1Component},
{path:"adminqns",component:AdminqnsComponent},
{path:"result",component:ResultComponent},
{path:"editqn",component:EditComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
