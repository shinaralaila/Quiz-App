import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
private addurl="http://localhost:3000/add"

private questionurl="http://localhost:3000/question/"

private quizurl="http://localhost:3000/quiz"

private homequiz="http://localhost:3000/homequiz"
  delete: any;
  private quizid: any;

  constructor(private http:HttpClient) { }
  newQuestion(item:any){
    return this.http.post(this.addurl,{"question":item})
    .subscribe((data: any)=>{console.log(data)})
  }
  newQuiz(item:any){
    return this.http.post(this.quizurl,{"quiz":item})
    .subscribe((data: any)=>{console.log(data)}
  
    )} 

  getQuestion(id:any){
    return this.http.get(this.questionurl+id)
  }
  getDelete(id:any) {
    return this.http.delete("http://localhost:3000/remove/"+id);
  }
  getQuestionJson(){
    return this.http.get<any>("assets/questions.json")
  }
  setQuizId(id:any) {
    this.quizid = id;
  }
  getQuizId() {
    return this.quizid;
  }

  deletequiz(id:any) {
    return this.http.delete("http://localhost:3000/removequiz/" + id);
  }
  gethomequiz() {
    return this.http.get(this.homequiz);
  }
  setDelete(data:any) {
    this.delete = data;
  }


}
function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}

