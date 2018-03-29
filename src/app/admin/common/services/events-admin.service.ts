import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';

import { Event } from '../modals/event';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
    event['club'] = 'Users Club'; // this should be taken from the logged in user club information
    return this.eventRef.add(event);
  }

  updateEvent(documentId, event) {
    this.eventRef.doc(documentId).update(event);
  }

  getStates() {
    return states;
  }

  getStateObservable() {
    return Observable.of(states);
  }

  

  getDistrict(name: String) {
    return districts.filter(item=> item.state == name)
  }

}



export const states = [
  'Kerala',
  'Tamil Nadu',
  'Karnataka'
]

export const districts = [
  {
    name: 'Malappuram',
    state: 'Kerala',
  },
  {
    name: 'Trissur',
    state: 'Kerala',
  },
  {
    name: 'Chennai',
    state: 'Tamil Nadu'
  }
]