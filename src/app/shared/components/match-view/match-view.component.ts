import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent implements OnInit {
  match = {
    team1: 'hello',
    team2: 'super test'
  }
  constructor() { }

  ngOnInit() {
  }

}
