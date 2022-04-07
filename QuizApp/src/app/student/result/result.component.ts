
import { AdminGuard } from './../../admin.guard';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  quiz: any = [{
    quizname: "",
    quizdes: ""
  }];


  result: any = [{
    quizid: "",
    email: "",
    score: "",
    datastamp: ""
  }]


  constructor(private questionservice: QuestionService, private router: Router, private admin: AdminGuard) { }

  ngOnInit(): void {
    this.getresult();
  }

  getdata() {
    this.questionservice.gethomequiz().subscribe((data: any) => {
      this.quiz = JSON.parse(JSON.stringify(data))
      console.log(data)
    })
  }
  getresult() {
    this.questionservice.getresult().subscribe((data: any) => {
      this.result = JSON.parse(JSON.stringify(data))
      console.log(data)
    })
  }
  add(quiz: any) {
    this.questionservice.setQuizId(quiz._id);
    this.router.navigate(['addquestions']);
  }

  viewQuestion(q: any) {
    this.questionservice.setQuizId(q._id);
    this.questionservice.setDelete(q.upload)
    this.router.navigate(['question']);
  }
  delete(quiz: any) {
    this.questionservice.deletequiz(quiz._id)
      .subscribe(
        (data: any) => {

          // console.log(data);
          this.getdata();
          this.router.navigate(['homequiz']);
        },


      )
  }

}
