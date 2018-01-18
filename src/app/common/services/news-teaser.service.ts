import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';

@Injectable()
export class NewsTeaserService {
  $newRef: AngularFirestoreCollection<any>;
  $generalNewsTen: AngularFirestoreCollection<any>;
  $favClubNewsFive: AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore) {
    // this.$newRef = this.db.collection('news');
    this.$generalNewsTen = this.db.collection('news', ref => ref.where('is_active', '==', true)
    .where('status', '==', 'published').orderBy('created_on').limit(10));

    this.$favClubNewsFive = this.db.collection('news', ref =>
      ref.where('is_active', '==', true)
        .where ('status', '==', 'published')
        // .where ('tagged_clubs.kWAwj3z38KJCDBhT2GNU', '==', true)
        .where('tagged_clubs.YYlnUyMiUstoMwXLWVlh', '==', true)
        .limit(5));

        
  }

  getRecentTenNews() {

    return this.$generalNewsTen.snapshotChanges()
      .map(res => {
        return res.map(item => {
          const data = item.payload.doc.data();
          const id = item.payload.doc.id;
          return { id, ...data };
        });
      })
      
  }

  getFavClubNewsFive() {
    return this.$favClubNewsFive.snapshotChanges()
      .map(res => {
        return res.map(item => {
          const data = item.payload.doc.data();
          const id = item.payload.doc.id;
          return { id, ...data};
        });
      })
      .map(res => {
        console.log(res);
        return res;
      });
  }
}
