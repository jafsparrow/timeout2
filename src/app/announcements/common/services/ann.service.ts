import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class AnnService {
  private annCollection: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) { 
    this.annCollection = this.db.collection('announcements');
  }

  getAnnouncements() {
    return this.annCollection.valueChanges();
  }

  getAnnoucementDetails(id) {
    return this.annCollection.doc(id).valueChanges();
  }
}
