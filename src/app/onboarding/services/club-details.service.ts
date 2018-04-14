import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class ClubDetailsService {
  clubName$ = new Subject<string>();
  queryObservable$: Observable<{}>;
  constructor(private db: AngularFirestore) {
    this.queryObservable$ = this.clubName$
        .pipe(switchMap(clubNameQuery => {
          console.log(clubNameQuery);
          return this.db.collection('clubs', ref=> ref.where('name', '>=', clubNameQuery)).valueChanges();
        }))
   }

   searchByClubName(name) {
     this.clubName$.next(name);
   }


}
