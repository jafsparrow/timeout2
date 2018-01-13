import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {
  @Input('team') team;
  // @Output() viewClub = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  navigateToClub() {
    console.log('go to club details');
  }
}
