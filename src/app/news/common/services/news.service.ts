
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';

import {ClubDetailsService } from './club-details.service';
import { News } from '../modals/news';

import { FileUpload } from '../modals/file-uploader';

@Injectable()
export class NewsService {
  news: AngularFirestoreCollection<any>;
  private basePath = '/news/images';
 
  
  constructor(private db: AngularFirestore,
    private clubDetailService: ClubDetailsService) {
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
  createNews(news: any) {
    // update the news to include extra fields like author, is_active , created_on, status
    news.author = 'Jafar';
    news.is_active = true;
    news.created_on = new Date();
    news.status = 'Draft';

    return this.news.add(news)
      .then( res =>  {
        console.log(res.id);
        return res;
      });
  }

  uploadNewsImage(upload: FileUpload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    return uploadTask.then(res => {
      console.log('upload completed');
      return res;
      })
    .catch(err => console.log(err));

  }
  updateNews() {

  }

  deleteNews() {

  }

  updateNewsAfterImageLoad(key: string, downloadLink: string) {
    this.news.doc(key).update({image: downloadLink})
      .then(res => {
        console.log('image donwload link has been updated');
      });
  }

}
