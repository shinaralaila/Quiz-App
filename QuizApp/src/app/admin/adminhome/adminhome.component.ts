import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

 
   quiz: any=[{
     quizname:"" ,
    quizdes:""}];
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
        this.router.navigate(['addquestions']);
      }

      viewQuestion(q:any) {
        this.questionservice.setQuizId(q._id);
        this.questionservice.setDelete(q.upload)
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
    
}
