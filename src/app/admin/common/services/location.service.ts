import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
// import { switchMap } from 'rxjs/operators/switchMap';
// import { combineLatest} from 'rxjs/operators/combineLatest';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import { firestore } from 'firebase';
@Injectable()
export class LocationService {
  panchayatRef: AngularFirestoreCollection<any>;
  clubsRef: AngularFirestoreCollection<any>;
  clubs: Observable<any[]>;
  districtFilter$: BehaviorSubject<String|null>;
  panchayatFilter$: BehaviorSubject<String|null>;


  constructor(private db: AngularFirestore) {
    this.districtFilter$ = new BehaviorSubject(null);
    this.panchayatFilter$ = new BehaviorSubject(null);
    this.clubs = Observable.combineLatest(
      this.districtFilter$,
      this.panchayatFilter$
    ).switchMap(([district, panchayat]) => {
      return db.collection('clubs', ref => {
        let query: firestore.CollectionReference | firestore.Query = ref;
        if(district) { query = query.where('district', '>=', district)}
        if(panchayat) { query = query.where('panchayat', '>=', panchayat)}
        return query;
      }).valueChanges(); 
    });



    // this.panchayatRef = this.db.collection('panchayat');
    
  }

  getPanchayats() {
    const state = 'Kerala';
    const district  = 'Malappuram';

    let panahayats$ = this.panchayatRef.valueChanges();
    return panahayats$;
  }



}
