
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-demoquiz',
  templateUrl: './demoquiz.component.html',
  styleUrls: ['./demoquiz.component.css']
})
export class DemoquizComponent implements OnInit {
  @ViewChild('name') nameKey!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
    
  }
  }

