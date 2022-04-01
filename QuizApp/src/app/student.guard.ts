import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
 
  constructor(private router: Router, private auth:AuthService) { }

  doSomthing() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    localStorage.removeItem('admin');
    localStorage.removeItem('student');
    localStorage.removeItem('teacher');
    this.router.navigate(['/'])
  }

  canActivate(): boolean {
    if (this.auth.loggedIn())
    {
      if (localStorage.getItem('student') == "yes")
      {
        if (localStorage.getItem('admin') == "no")
        {
          if (localStorage.getItem('teacher') == "no")
          {
            return true;
          }
          else
          {
            this.doSomthing();
            return false;
          }
        }
        else
        {
          this.doSomthing();
          return false;
        }

      }
      else
      {
        this.doSomthing();
        return false;
      }
    }
    else
    {
      this.doSomthing();
      return false;
    }
  }
}
