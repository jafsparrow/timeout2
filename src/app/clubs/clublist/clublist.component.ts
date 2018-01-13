import { Component, OnInit } from '@angular/core';

import {ClubsService} from '../common/services/clubs.service';
import { Observable } from 'rxjs/Observable';
import {_do } from 'rxjs/Operator/do';

@Component({
  selector: 'app-clublist',
  templateUrl: './clublist.component.html',
  styleUrls: ['./clublist.component.css']
})
export class ClublistComponent implements OnInit {

  clubs: Observable<any[]>;
 
  constructor(private clubsService: ClubsService) { }

  ngOnInit() {
    this.clubs = this.clubsService.getAllClubs()
  }

  
}
