import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Trregister_url = "http://localhost:3000/registerTr";

  private Stregister_url = "http://localhost:3000/registerSt";
  private login_url = "http://localhost:3000/login";

  constructor(private http: HttpClient, private router: Router) { }


  registerUser(user: any) {
    return this.http.post<any>(this.Trregister_url, user)
  }

  registerStUser(user: any) {
    return this.http.post<any>(this.Stregister_url, user)
  }

  loginUser(user: any) {
    return this.http.post<any>(this.login_url, user)
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }


  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    localStorage.removeItem('admin');
    localStorage.removeItem('student');
    localStorage.removeItem('teacher');
    this.router.navigate(['/home']);
  }
}

