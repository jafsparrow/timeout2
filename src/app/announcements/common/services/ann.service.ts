import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';

@Injectable()
export class AnnService {
  private annCollection: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) { 
    this.annCollection = this.db.collection('announcements')
  }

  getAnnouncements() {
    return this.annCollection.valueChanges();
  }
}
