import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
private addurl="http://localhost:3000/add"

private questionurl="http://localhost:3000/question"

private quizurl="http://localhost:3000/quiz"
  delete: any;

  constructor(private http:HttpClient) { }
  newQuestion(item:any){
    return this.http.post(this.addurl,{"question":item})
    .subscribe((data: any)=>{console.log(data)})
  }
  newQuiz(item:any){
    return this.http.post(this.quizurl,{"quiz":item})
    .subscribe((data: any)=>{console.log(data)}
  
    )} 

  getQuestion(){
    return this.http.get(this.questionurl)
  }
  getDelete(id:any) {
    return this.http.delete("http://localhost:3000/remove/"+id);
  }
}
function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}

