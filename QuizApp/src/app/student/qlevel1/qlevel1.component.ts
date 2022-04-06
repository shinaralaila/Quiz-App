import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormControl, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qlevel1',
  templateUrl: './qlevel1.component.html',
  styleUrls: ['./qlevel1.component.css']
})

export class Qlevel1Component implements OnInit {

  form = new FormGroup({
    result: new FormControl('', Validators.required)
  });

  get f() {
    return this.form.controls;
  }

  submitResults() {
    // console.log(this.form.value);
  }

  public scored: any;

  changeResult(e, ans) {
    // console.log(e.target.value);
    // console.log(ans);
    if (e.target.value === ans) {
      // this.question.scored = "Correct"; 
      this.scored = "Correct";
    } else {
      // this.question.scored = "Wrong";
      this.scored = "Wrong";
    }
    // console.log(this.question.scored);
    // console.log(this.scored);
    // console.log(e.target['checked']);
  }

  public radioStatus: boolean = false;

  quiz: any;
  answers: any;
  questions: number = 0;
  currentQuestionIndex: number = 0;
  temp: any;
  ansOfOneQuestion: any[] = [];
  ansKey: any[] = [];
  score: number = 0;
  flagLast: boolean = false;
  finalResult: boolean = false;
  oneQuestion: any;


  public currentQuestion: number = 0;

  obj: any
  quizid: any
  question: any = [{
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  }];

  constructor(private questionservice: QuestionService, private router: Router) { }


  userscoreitem: any = {
    quizid: '',
    email: '',
    userscore: 0,
    datestamp: ''
  }

  ngOnInit(): void {

    this.quizid = this.questionservice.getQuizId();
    // console.log('this.quizid'); console.log(this.quizid);

    this.getAllQuestions();

    // this.del = this.questionservice.getDelete()
    this.quizid = this.questionservice.getQuizId();
    // console.log(this.del);

    //console.log("QuizId in QuestionComp");console.log(this.quizid);
    this.questionservice.getQuestion(this.quizid).subscribe((data: any) => {
      this.question = JSON.parse(JSON.stringify(data))
      // console.log("this.question"); console.log(this.question);
    })

  }

  getAllQuestions() {

    this.questionservice.getQuestion(this.quizid).subscribe((data: any) => {
      this.question = JSON.parse(JSON.stringify(data))

      this.createAns();
      this.questions = this.question.length;
      this.oneQuestion = this.question[0];
    })
  }

  nextQuestion() {
    if (this.currentQuestion != this.questions) {
      this.currentQuestion++;
      if (this.currentQuestion == this.questions) {
        this.flagLast = true;
        this.submitResult();
      } else if (this.currentQuestion > this.questions) {
        this.flagLast = true;
        // console.log("this.submitResult()");
        this.submitResult();
      }
      this.oneQuestion = this.question[this.currentQuestion - 1];

    }
    this.radioStatus = false;
    // this.getScore();
    // console.log("curQ:"); console.log(this.currentQuestion);
    // console.log("radioStatus"); console.log(this.radioStatus);
    // console.log("Qns:"); console.log(this.questions);
    // console.log("flagLast"); console.log(this.flagLast);
    
  }

  previousQuestion() {
    if (this.currentQuestion != 0) {
      this.currentQuestion--;
      if (this.currentQuestion == 0) {
        // this.flagLast = true;
      }
      this.oneQuestion = this.question[this.currentQuestion - 1];

    }
    this.radioStatus = false;
    
    // console.log("curQ:"); console.log(this.currentQuestion);
    // console.log("radioStatus"); console.log(this.radioStatus);
    // console.log("Qns:"); console.log(this.questions);
    // console.log("flagLast"); console.log(this.flagLast);

  }

  createAns() {
    for (let index = 0; index < this.question.length; index++) {
      const id = this.question[index].question;
      const ans = this.question[index].answer;
      this.ansKey.push({ qid: id, ans: ans });

    }
    // console.log("ansKey"); console.log(this.ansKey);
  }

  answer(qid: any, ans: any) {
    this.temp = this.ansOfOneQuestion.pop()
    // console.log("temp"); console.log(this.temp);
    // console.log("qid"); console.log(qid);
    // console.log("ans"); console.log(ans);

    if (this.temp) {
      console.log("temp.qid"); console.log(this.temp.qid);
      if (this.temp.qid != qid) {
        this.ansOfOneQuestion.push(this.temp);

      }
    }
    this.ansOfOneQuestion.push({ qid: qid, ans: ans });
    // console.log(this.ansOfOneQuestion);
  }

  getScore() {
    // console.log("Score Before"); console.log(this.score);
    // console.log("this.ansOfOneQuestion"); console.log(this.ansOfOneQuestion);
    // console.log("this.ansKey"); console.log(this.ansKey);
    for (let i = 0; i < this.ansOfOneQuestion.length; i++) {
      // console.log("this.ansOfOneQuestion[i].qid"); console.log(this.ansOfOneQuestion[i].qid);
      // console.log("this.ansOfOneQuestion[i].ans"); console.log(this.ansOfOneQuestion[i].ans);
      for (let j = 0; j < this.ansKey.length; j++) {
        // console.log("this.ansKey[j].qid"); console.log(this.ansKey[j].qid);
        // console.log("this.ansKey[j].ans"); console.log(this.ansKey[j].ans);

        if (this.ansOfOneQuestion[i].qid == this.ansKey[j].qid) {
          if (this.ansOfOneQuestion[i].ans == this.ansKey[j].ans) {
            this.score++;
            // console.log("Scored"); console.log(this.score);
          }
        }
      }
    }
     console.log("Score:"); console.log(this.score);
  }

  SaveScore() {
    this.userscoreitem = { quizid: this.quizid, email: "123", score: this.score, datestamp: "date" }
    console.log("Save Score:");console.log(this.userscoreitem);
    this.questionservice.postuserscoredata(this.userscoreitem);
    //this.router.navigate(["homequiz"]);
  }


  submitResult() {
    this.finalResult = true;
    this.getScore();
    this.SaveScore();
  }
}
