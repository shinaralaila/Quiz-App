import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';
import { QuizModel } from './quizmodel';


@Component({
  selector: 'app-teacherhome',
  templateUrl: './teacherhome.component.html',
  styleUrls: ['./teacherhome.component.css']
})
export class TeacherhomeComponent implements OnInit {
  quizname: any;
  quizdes: any;
  
  constructor(private questionService:QuestionService,private router:Router) {}
  obj:any;
  
  quizItem = {
    quizname :'',
    quizdes:''
    
  }
    

  ngOnInit(): void {}
    AddQuiz(){
  
      this.questionService.newQuiz(this.quizItem)
      
      console.log("called");
      this.router.navigate(["addquestions"]);
    }
  }



