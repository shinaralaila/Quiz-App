import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {
obj:any;
quizid:any;
  @ViewChild('name') nameKey!:ElementRef;
  quiz:any =[ {
    quizname :'',
    quizdes:''
    
  }]
  

  constructor(private questionservice:QuestionService,private router:Router) { }

  ngOnInit(): void {
    this.getdata();
    this.quizid = this.questionservice.getQuizId();
   
  }

  getdata() {
    this.questionservice.gethomequiz().subscribe((data: any)=>{
      this.quiz=JSON.parse(JSON.stringify(data))
      console.log(data)
        })
      }

  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
    
  }
  playquiz(q:any){
    this.questionservice.setQuizId(q._id);
    // this.questionservice.setDelete(q.upload)
    this.router.navigate(['qlevel1']);
  }

}
