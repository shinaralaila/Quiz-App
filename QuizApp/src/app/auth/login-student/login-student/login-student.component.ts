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

    
    this.auth.loginUser(this.user).subscribe((data: any) => {
     
      console.log("data "+data['role'])
       
      if (data['role'] == 'teacher') {
        console.log("student ");
        console.log(data.token);
        window.localStorage.setItem('token', data.token);
        //console.log(localStorage.getItem('token'))
        window.localStorage.setItem('student', 'yes');
        //console.log(localStorage.getItem('teacher'))
        this.router.navigate(['studenthome']);
      }
      else {

        this.router.navigate(['login-student'])
      }
    })
  
    function data(data: any): string {
      throw new Error('Function not implemented.');
    }
  }
}


