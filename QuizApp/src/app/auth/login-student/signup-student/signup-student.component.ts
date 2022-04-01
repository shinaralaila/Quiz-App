import { Router } from '@angular/router';
import { AuthService } from './../../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-student',
  templateUrl: './signup-student.component.html',
  styleUrls: ['./signup-student.component.css']
})
export class SignupStudentComponent implements OnInit {

registerUserData:any={}

  constructor(private auth:AuthService,private router:Router) { }
  
  

  ngOnInit(): void {
  }
  registerStUser(){
  this.auth.registerStUser(this.registerUserData)
  .subscribe()
  this.router.navigate(["login-student"]);
  }
}
