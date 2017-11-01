import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
       animations: [
        trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ]),
    trigger('explainerAnim', [
      transition('* => *', [
        query('.welcome_line_col', style({ opacity: 0, transform: 'translateX(-40px)' })),

        query('.welcome_line_col', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.welcome_line_col', [
          animate(1000, style('*'))
        ])
        
      ])
    ])
  ]
  
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
