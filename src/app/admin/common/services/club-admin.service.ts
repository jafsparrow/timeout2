import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Match } from '../modals/match';

/**
 * this is where we check the user has the given role for a club. if he does display accordingly.
 * A 'Editor' user does not need publish permission.
 */
@Injectable()
export class ClubAdminService {

  clubs: AngularFirestoreCollection<any>;
  events: AngularFirestoreCollection<any>;

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

  // A method for creating a new Match.
  createMatch(match: Match) {

  }
  // A method for creating fixtures for the match.
  createFixture(match: any, fixture) {

  }
  // A method for adding live tickers.
}
