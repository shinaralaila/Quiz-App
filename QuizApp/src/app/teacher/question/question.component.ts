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

    this.questionservice.getQuestion().subscribe((data: any)=>{
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
