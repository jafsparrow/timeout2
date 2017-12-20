import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { News } from '../modals/news';

@Injectable()
export class NewsService {
  news: AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore) {
    this.news = this.db.collection('news');
   }


  // read news list. implement 10 pagination.
  getNews() {
    return this.news.snapshotChanges()
      .map(res => {
        return res.map(item => {
          const data = item.payload.doc.data();
          const id = item.payload.doc.id;
          return { id, ...data };
        });
      });
  }
  // read individual news.

  getDetailedNews(key: string) {
    return this.db.collection('news').doc(key);
  }
  // create a new news.
  createNews() {

  }

  updateNews() {

  }

  deleteNews() {

  }

}
