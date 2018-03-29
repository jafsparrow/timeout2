import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Annoucement } from '../modals/annoucement';

@Injectable()
export class EventsService {
  private matches: AngularFirestoreCollection<any>;
  private annoucementRef: AngularFirestoreCollection<any>;
  annoucements$: Observable<Annoucement[]>;
  
  constructor(private db: AngularFirestore) {
    console.log('eent service activated');
    this.createEventDbrefrerence();
    this.annoucementRef = this.db.collection('events');
  }

  createEventDbrefrerence() {
    const start = new Date();
    console.log(start);
    // const nextTime = start.getTime() + 7 * 24 * 60 * 60 * 60;
    // console.log(`start time ${start.getTime()} and next time ${nextTime}`);
    // need to check any other way to get the next week date from today.
    const end = new Date();
    end.setDate(start.getDate() + 7);
    console.log(end);
    this.matches = this.db.collection('fixtures', ref => {
      return ref.where('date', '>', start).where('date', '<', end);
    });
  }

  getThisWeekMatches() {
    return this.matches;
  }

  getAnnoucemnts() {
    this.annoucements$ = this.annoucementRef.valueChanges();
    return this.annoucements$;
  }
  getFavClubsAnnoucements(id: String) {

  }


}
