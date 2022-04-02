import { QuestionModel } from './../addquestions/questionmodel';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
quizid:any
  question:any=[ {
    question :'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }];

  constructor(private questionservice:QuestionService) { }

  ngOnInit(): void {
   // this.del = this.questionservice.getDelete()
    this.quizid = this.questionservice.getQuizId();
    // console.log(this.del);
    
    console.log("QuizId in QuestionComp");console.log(this.quizid);
    this.questionservice.getQuestion(this.quizid).subscribe((data: any)=>{
      this.question=JSON.parse(JSON.stringify(data))

    })
  }
  delete(question:any) {
    this.questionservice.getDelete(question._id)
    .subscribe((_data: any)=>{
      this.question=this.question.filter((p: any)=>p!==question)
    })
  }
}
