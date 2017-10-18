import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  welcome_lines =[];

  constructor() { 
   this.welcome_lines=["This is korpikoodarit homepage.","The coders focus on open source technologies raging from open source web frameworks to mobile android development",
   "Current issues range from using JHpister framework combined with Angular and futher focus on Spring Boot.",
 " In addition,Focus on Android mobile development"];
  }

  ngOnInit() {
  }
  push_welcomeLine()
  {
    this.welcome_lines.push("Angular is great");
  }
  remove_welcomeLine()
  {
    this.welcome_lines.pop();
  }

}
