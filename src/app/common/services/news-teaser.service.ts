import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';

import { forkJoin} from 'rxjs/observable/forkJoin';
import { take, repeat } from 'rxjs/operators';
@Injectable()
export class NewsTeaserService {
  $newRef: AngularFirestoreCollection<any>;
  $generalNewsTen: AngularFirestoreCollection<any>;
  $favClubNewsFive: AngularFirestoreCollection<any>;

  favClubs = ['5ZRSBNKpB1u2OJ0urK0w', 'U9HsplCcUBvfcV95DOoP'];
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

  getFavNews() {

    console.log('getting fav news function');
    const calls = [];
    for (let fav of this.favClubs) {
      calls.push(this.getNewForClub(fav));
    }
    return forkJoin(calls).map(arrays => [].concat.apply([], arrays));;


    // let news1$ = this.db.collection('news', ref=> ref.where('title', '>', 'Liverpool Club o')).valueChanges().pipe(take(1);
    // let news2$ = this.db.collection('news', ref=> ref.where('title', '==', 'helloowr')).valueChanges().pipe(take(1));

    // return forkJoin(news1$, news2$)
        // .map(arrays => [].concat.apply([], arrays));
  }

  getTaggedClubNews() {
    const calls = [];
    for (let fav of this.favClubs) {
      calls.push(this.getNewForClub(fav));
    }
    return forkJoin(calls).map(arrays => [].concat.apply([], arrays));;
  }
  
  getNewForClub(club_ID: string) {  
    const club_search = 'tagged_clubs.'+club_ID;
    console.log(club_search);
    return this.db.collection('news', ref => ref.where(club_search, '==',true)).valueChanges().pipe(take(1));
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
