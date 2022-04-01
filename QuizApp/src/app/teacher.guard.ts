import { Injectable } from '@angular/core';
import {  CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  trGuard() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    localStorage.removeItem('admin');
    localStorage.removeItem('student');
    localStorage.removeItem('teacher');
    this.router.navigate(['/'])
  }

  canActivate(): boolean {
    if (this.authService.loggedIn())
    {
      if (localStorage.getItem('teacher') === "yes")
      {
        // if (localStorage.getItem('admin') === "no")
        // {
        //   if (localStorage.getItem('student') === "no")
        //   {
            return true;
          // }
          // else
          // {
          //   this.trGuard();
          //   return false;
          // }
        // }
        // else
        // {
        //   this.trGuard();
        //   return false;
        // }

      }
      else
      {
        this.trGuard();
        return false;
      }
    }
    else
    {
      this.trGuard();
      return false;
    }
  }

}


