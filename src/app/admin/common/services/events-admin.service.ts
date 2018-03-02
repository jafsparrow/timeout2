import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';

import { Event } from '../modals/event';

@Injectable()
export class EventsAdminService {

  eventRef: AngularFirestoreCollection<any>;
  
  constructor(private db: AngularFirestore) {
    this.eventRef = this.db.collection('events');
  }

  getEvents() {
    return this.eventRef.valueChanges();
  }

  getEventDetail(eventId) {

  }

  createEvent(event) {
    return this.eventRef.add(event);
  }

  updateEvent(documentId, event) {
    this.eventRef.doc(documentId).update(event);
  }

}
