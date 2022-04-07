import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private addurl = "http://localhost:3000/add"

  private questionurl = "http://localhost:3000/question/"
  private questionsurl = "http://localhost:3000/questions"
  private quizurl = "http://localhost:3000/quiz"

  private userscoreurl = "http://localhost:3000/userscore"

  private homequiz = "http://localhost:3000/homequiz"

  private result = "http://localhost:3000/result"

  delete: any;
  private quizid: any;

  constructor(private http: HttpClient) { }

  newQuestion(item: any) {
    return this.http.post(this.addurl, { "question": item })
      .subscribe((data: any) => { console.log(data) })
  }
  newQuiz(item: any) {
    return this.http.post(this.quizurl, { "quiz": item })
      .subscribe((data: any) => { console.log(data) }

      )
  }

  getQuestion(id: any) {
    return this.http.get(this.questionurl + id)
  }

  getQuestions() {
    return this.http.get(this.questionsurl)
  }

  getDelete(id: any) {
    return this.http.delete("http://localhost:3000/remove/" + id);
  }
  getQuestionJson() {
    return this.http.get<any>("assets/questions.json")
  }
  setQuizId(id: any) {
    this.quizid = id;
  }
  getQuizId() {
    return this.quizid;
  }


  postuserscoredata(item: any) {
    console.log("postuserscore:"); console.log(item);
    return this.http.post(this.userscoreurl, { "userscore": item })
      .subscribe((data: any) => { console.log(data) }
      )
  }
  deletescore(id: any) {
    return this.http.delete("http://localhost:3000/removescore/" + id);
  }
  deletequiz(id: any) {
    return this.http.delete("http://localhost:3000/removequiz/" + id);
  }
  gethomequiz() {
    return this.http.get(this.homequiz);
  }
  setDelete(data: any) {
    this.delete = data;
  }

  getqn(question: any) {
    // console.log('Qn Svc: Get'); console.log(question);
    // localStorage.setItem("editQuestionId", question);
    // console.log(localStorage.getItem("editQuestionId"));
    return this.http.get("http://localhost:3000/getqn/"+question);
  }

  editqn(question: any) {
    // console.log('Qn Svc: Edit'); console.log(question);
    return this.http.put("http://localhost:3000/editqn", question)
    .subscribe(data =>{console.log(data)})
    
  }

  getresult() {
    return this.http.get(this.result);
  }

}
function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}

