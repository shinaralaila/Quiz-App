import { AdminGuard } from './admin.guard';
import { QuestionService } from './question.service';
import { StudentGuard } from './student.guard';
import { TeacherGuard } from './teacher.guard';


import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { ChangeBgDirective } from './change-bg.directive';
import { TokenInterceptorService } from './token-interceptor.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



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
import { AuthService } from './auth.service';
import { QuizComponent } from './teacher/quiz/quiz.component';
import { AdminnavComponent } from './admin/adminnav/adminnav.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ViewteacherComponent } from './admin/viewteacher/viewteacher.component';
import { ViewstudentComponent } from './admin/viewstudent/viewstudent.component';
import { StudenthomeComponent } from './student/studenthome/studenthome.component';
import { Qlevel1Component } from './student/qlevel1/qlevel1.component';


import { ResultComponent } from './student/result/result.component';
import { StudentnavComponent } from './student/studentnav/studentnav.component';
import { AdminqnsComponent } from './admin/adminqns/adminqns.component';
import { EditComponent } from './teacher/edit/edit.component';



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
    QuizComponent,
    AdminnavComponent,
    AdminhomeComponent,
    ViewteacherComponent,
    ViewstudentComponent,
    StudenthomeComponent,
    Qlevel1Component,
  
    ResultComponent,
    StudentnavComponent,
    AdminqnsComponent,
    EditComponent

  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    FontAwesomeModule
    
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TeacherGuard, StudentGuard,AuthService,QuestionService, AdminGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
