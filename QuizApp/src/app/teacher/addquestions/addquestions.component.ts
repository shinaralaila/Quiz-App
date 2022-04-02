import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/question.service';
import { QuestionModel } from './questionmodel';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css']
})
export class AddquestionsComponent implements OnInit {
  question: any;
  option1: any;
  option2: any;
  option3: any;
  option4: any;
quizid:any
  constructor(private questionService:QuestionService,private router:Router) { }
  obj:any;
  questionItem :any= {
    question :'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }
    

  ngOnInit(): void {
    this.quizid=this.questionService.getQuizId()
  }
AddQuestion(){
  this.obj = {quizid:this.quizid,questionItem:this.questionItem}
  this.questionService.newQuestion(this.obj);
  console.log("called");
  this.router.navigate(["homequiz"]);
}
}
