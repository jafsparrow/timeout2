import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';

// This brings me meta data about clubs which is used for news read and create.
@Injectable()
export class ClubDetailsService {

  clubs: AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore) {
    this.clubs = this.db.collection('clubs');
   }

   // this shoudl return observable of filtered clubs based on the key.
  getTaggedClubs(keys) {
    // this.getAllclubs()
    //   .filter(res => res[0].id === 'HYU2JPaH9ys1nKQOHKKE')
    //   .subscribe(res => console.log(res));

  return this.clubs.snapshotChanges()
    .map(res => {
      return res.map(item => {
        const data = item.payload.doc.data();
        const id = item.payload.doc.id;
        return { id, ...data};
      });
    })
    .map(res => {
      return res.filter(item => {
        return keys.indexOf(item.id) > -1;
      });
    });
    

  }

  getAllclubs() {
    return this.clubs.snapshotChanges()
    .map(res => {
      return res.map(item => {
        const data = item.payload.doc.data();
        const id = item.payload.doc.id;
        return { id, ...data};
      });
    });
  }
}



// return this.news.snapshotChanges()
// .map(res => {
//   return res.map(item => {
//     const data = item.payload.doc.data();
//     const id = item.payload.doc.id;
//     return { id, ...data };
//   });
// });