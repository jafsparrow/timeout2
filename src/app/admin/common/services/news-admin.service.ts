import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';

@Injectable()
export class NewsAdminService {
  news: AngularFirestoreCollection<any[]>;

  constructor(private db: AngularFirestore) {
    this.news = this.db.collection('news', ref => ref.where('is_active', '==', true)
                                                      );
  }

  // Get all the news in last 12 months.
  readAllNews() {
    return this.news.snapshotChanges()
      .map(res => {
        return res.map(item => {
          const data = item.payload.doc.data();
          const key = item.payload.doc.id;
          return { key, ...data };
        });
      });
  }

}
