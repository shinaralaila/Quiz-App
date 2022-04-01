import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {
user:any={
  email:"",
  password:""
}
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  loginStUser () {
    
    this.auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/home'])
      },
      err => {
        console.log(err);
        this.router.navigate(['/login-student'])
      }
    ) 
  }



}
