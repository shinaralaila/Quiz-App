import { QuestionService } from 'src/app/question.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  quizid: any
  question={
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  };

  constructor(private questionservice: QuestionService, private router: Router) { }

  ngOnInit(): void {
    var questionId = localStorage.getItem("editQuestionId");
    // console.log("EditInit:QnId"); console.log(questionId);
    this.questionservice.getqn(questionId).subscribe((data) => {
      this.question = JSON.parse(JSON.stringify(data));
      // console.log("Init1:Question:");console.log(this.question);
    })
  }
  editqn(question: any) {
    this.questionservice.editqn(question);     
    this.router.navigate(['homequiz']);
  }
}
