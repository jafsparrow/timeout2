import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-season-teaser',
  templateUrl: './season-teaser.component.html',
  styleUrls: ['./season-teaser.component.css']
})
export class SeasonTeaserComponent implements OnInit {
  @Input() event: any;
  constructor() { }

  machi = [
    {
      team1: {name: 'ehllo', score: 2 },
      team2: {name: 'duper', score: 5}
    }
    ,
    {
      team1: {name: 'sadfasdf', score: 2 },
      team2: {name: 'duasdfdsfper', score: 5}
    }
  ]

  ngOnInit() {
    console.log('season teaser component');
    console.log(this.event);
  }

}
