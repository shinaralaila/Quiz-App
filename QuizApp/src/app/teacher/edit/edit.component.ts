import { QuestionService } from 'src/app/question.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  quizid:any
  question:any=[ {
    question :'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }];

  constructor(private questionservice:QuestionService,private router:Router) { }

  ngOnInit(): void {
    let questionId = localStorage.getItem("editquestionId");
    console.log(localStorage.getItem("editquestionId"))
    this.questionservice.edit(questionId).subscribe((data)=>{
      this.question=JSON.parse(JSON.stringify(data));
  })
  }
  edit(q:any)
  {   
    this.questionservice.edit(this.question);   
  
    this.router.navigate(['edit']);
  } 
}
