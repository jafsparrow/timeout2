import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  cssClass = { 
    thisTeam: 'this-team',
    thatTeam: 'that-team'
  }
  constructor() { }

  ngOnInit() {
  }

  getClass() {
    return this.cssClass.thisTeam;
  }

}

export const updates = [
  {
    time: '',
    team: 'Liverpool',
    content: {
      type: 'image',
      url: 'url of the content',
      description: 'that corner that turned the heads'
    }
  },
  {time: '', team: 'Barcelona'}

]