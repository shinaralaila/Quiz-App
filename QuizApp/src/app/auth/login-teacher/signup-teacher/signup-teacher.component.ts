import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-teacher',
  templateUrl: './signup-teacher.component.html',
  styleUrls: ['./signup-teacher.component.css']
})
export class SignupTeacherComponent implements OnInit {
form:any={}

    

  constructor(private auth:AuthService,private router:Router) { }
  obj:any;
  
  ngOnInit(): void {
  }
  registerUser(){
    this.auth.registerUser(this.form)
    .subscribe()
    this.router.navigate(["login-teacher"]);
    }
}
