import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-summary',
  templateUrl: './match-summary.component.html',
  styleUrls: ['./match-summary.component.css']
})
export class MatchSummaryComponent implements OnInit {
  @Input('match') match;

  constructor() { }

  ngOnInit() {
    console.log(this.match);
  }


}
