import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';

@Injectable()
export class EventsService {
  private matches: AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore) {
    console.log('eent service activated');
    this.createEventDbrefrerence();
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

}
