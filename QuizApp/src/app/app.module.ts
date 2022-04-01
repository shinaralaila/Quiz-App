import { StudentGuard } from './student.guard';
import { TeacherGuard } from './teacher.guard';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { ChangeBgDirective } from './change-bg.directive';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DemoquizComponent } from './demoquiz/demoquiz.component';

import { AddquestionsComponent } from './teacher/addquestions/addquestions.component';
import { QuestionComponent } from './teacher/question/question.component';
import { TeachernavComponent } from './teacher/teachernav/teachernav.component';
import { TeacherhomeComponent } from './teacher/teacherhome/teacherhome.component';
import { LoginStudentComponent } from './auth/login-student/login-student/login-student.component';
import { SignupStudentComponent } from './auth/login-student/signup-student/signup-student.component';
import { LoginTeacherComponent } from './auth/login-teacher/login-teacher/login-teacher.component';
import { SignupTeacherComponent } from './auth/login-teacher/signup-teacher/signup-teacher.component';
import { DemoquestionsComponent } from './demoquestions/demoquestions.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DemoquizComponent,
    AddquestionsComponent,
    QuestionComponent,
    TeachernavComponent,
    TeacherhomeComponent,
    LoginStudentComponent,
    SignupStudentComponent,
    LoginTeacherComponent,
    SignupTeacherComponent,
    DemoquestionsComponent,
    ChangeBgDirective,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TeacherGuard, StudentGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
