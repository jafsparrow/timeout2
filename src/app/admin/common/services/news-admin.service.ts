import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { FileUpload } from '../modals/file-uploader';
import * as firebase from 'firebase';
import { News } from '../../../news/common/modals/news';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsAdminService {
  news: AngularFirestoreCollection<any[]>;
  private basePath = '/news/images';

  constructor(private db: AngularFirestore) {
    this.news = this.db.collection('news', ref => ref.where('is_active', '==', true);
                                                  // .where('test.5ZRSBNKpB1u2OJ0urK0w', '==', true));
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

  readNews(id): Observable<any> {
    return this.news.doc(id).valueChanges();
  }

  // create a new news.
  createNews(news: any) {
    // update the news to include extra fields like author, is_active , created_on, status
    news.author = 'Jafar';
    news.is_active = true;
    news.created_on = new Date();
    news.status = 'published';

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
  updateNews(key, data) {
    return this.news.doc(key).update(data);
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
