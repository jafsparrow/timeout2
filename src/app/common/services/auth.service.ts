import { Injectable } from '@angular/core';
import { AngularFireAuth  } from 'angularfire2/auth';

import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';


interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Injectable()
export class AuthService {
  user: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
      // Get the Auth data, then get the firestore userdata document || null
      this.user = this.afAuth.authState
                .switchMap(user => {
                  if (user) {
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                  } else {
                    return Observable.of(null);
                  }
                });
  }
}
