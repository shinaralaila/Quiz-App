import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})
export class LoginTeacherComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {

    this.auth.loginUser(this.user).subscribe((data: any) => {
     
      console.log("data "+data['role']);
      if (data['role'] == "admin") {
        // console.log("admin");
        localStorage.setItem('token', data.token );

        localStorage.setItem('admin', 'yes');
        localStorage.setItem('student', 'no');
        localStorage.setItem('teacher', 'no');
        // this.router.navigate(['/admin']);
        // this.router.navigate(['/']);
        this.router.navigate(['adminhome']);
      }
       
   else   if (data['role'] == 'teacher') {
        //console.log("Teacher ");
        //console.log(data.token);
        window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('email', data['email']);
        //console.log(localStorage.getItem('email'))
        //console.log(localStorage.getItem('token'))
        window.localStorage.setItem('teacher', 'yes');
        window.localStorage.setItem('student','no');
        window.localStorage.setItem('admin','no');

        //console.log(localStorage.getItem('teacher'))
        this.router.navigate(['homequiz']);
      }
      else {

        this.router.navigate(['login-teacher'])
      }
    })
  
    function data(data: any): string {
      throw new Error('Function not implemented.');
    }
  }
}

