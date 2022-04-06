import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private seetr_url="http://localhost:3000/seeteacher";
   

  constructor(private http:HttpClient,private router:Router) { }

  gettemail(){
    return this.http.get<any>(this.seetr_url)
    
  }
  
}

