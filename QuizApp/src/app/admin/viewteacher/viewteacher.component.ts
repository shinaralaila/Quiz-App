import { AdminService } from 'src/app/admin.service';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewteacher',
  templateUrl: './viewteacher.component.html',
  styleUrls: ['./viewteacher.component.css']
})
export class ViewteacherComponent implements OnInit {
user:any
  quiz: any=[{
    quizname:"" ,
   quizdes:"",
  email:""}];
 constructor(private questionservice:QuestionService, private router:Router,private admin:AdminService) { }

 ngOnInit(): void {
   this.getdata();
   this.gettemail()
   
 }
gettemail(){
  this.admin.gettemail().subscribe((data:any)=>{
this.user=JSON.parse(JSON.stringify(data))
console.log(data)
  })
  
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
       //this.questionservice.setDelete(q.upload)
       this.router.navigate(['adminqns']);
     }
     delete(quiz:any) {
       this.questionservice.deletequiz(quiz._id)
         .subscribe(
           (            data: any) => {
   
             // console.log(data);
             this.getdata();
              this.router.navigate(['viewteacher']);
           },
           
   
         )
     }
   
}
