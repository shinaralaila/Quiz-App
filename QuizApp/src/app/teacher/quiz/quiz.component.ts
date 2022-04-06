import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { QuestionService } from 'src/app/question.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
   quiz: any=[{
     quizname:"" ,
    quizdes:""}];


    quizid:any
    question:any=[ {
      question :'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      answer:''
    }];
    // selectedQuestion= new this.question();
  constructor(private questionservice:QuestionService, private router:Router) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.questionservice.gethomequiz().subscribe((data: any)=>{
      this.quiz=JSON.parse(JSON.stringify(data))
      console.log(data)
        })
     
      }
      add(quiz:any) {
        this.questionservice.setQuizId(quiz._id);
        console.log(localStorage.getItem('email'));
        this.router.navigate(['addquestions']);
      }

      viewQuestion(q:any) {
        this.questionservice.setQuizId(q._id);
       // this.questionservice.setDelete(q.upload)
        this.router.navigate(['question']);
      }
      delete(quiz:any) {
        this.questionservice.deletequiz(quiz._id)
          .subscribe(
            (            data: any) => {
    
              // console.log(data);
              this.getdata();
               this.router.navigate(['homequiz']);
            },
            
    
          )
      }
      edit(q)
      {  this.questionservice.setQuizId(q._id);  
        this.questionservice.edit(this.question);   
      console.log('edit')
        this.router.navigate(['question']);
      }
    /*  editqns(question) {
        this.selectedQuestion = question;
      } */
    
    
}
