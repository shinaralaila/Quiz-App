import { userModel } from './../../auth/usermodel';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';
import { QuizModel } from './quizmodel';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-teacherhome',
  templateUrl: './teacherhome.component.html',
  styleUrls: ['./teacherhome.component.css']
})
export class TeacherhomeComponent implements OnInit {
  quizname: any;
  quizdes: any;
  user:any;
  
  constructor(private questionService:QuestionService,private router:Router,private auth:AuthService) {}
  obj:any;
  
  quizItem = {
    quizname :'',
    quizdes:''
    
  }
    

  ngOnInit(): void {}
    AddQuiz(){
  
      this.questionService.newQuiz(this.quizItem)
      
      console.log("called");
      this.router.navigate(["homequiz"]);
    }
  }



