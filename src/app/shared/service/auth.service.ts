import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { User } from '../modals/user';
import { tap } from 'rxjs/operators';


// interface User {
//   uid: string;
//   email: string;
//   photoURL?: string;
//   displayName?: string;
//   favoriteColor?: string;
// }

@Injectable()
export class AuthService {
  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
      console.log('auth service is initialsed there.');
    // Get the Auth data, then get the firestore userdata document || null
    this.user$ = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          // set local storage with the logged in users fav_club
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }
  signOut() {
    this.afAuth.auth.signOut();
  }
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      roles: {
        subscriber: true
      }
    };
    return userRef.set(data, { merge: true });
  }

  ///// Role-based Authorization //////
canRead(user: User): boolean {
  const allowed = ['admin', 'editor', 'subscriber'];
  return this.checkAuthorization(user, allowed);
}
canEdit(user: User): boolean {
  const allowed = ['admin', 'editor'];
  return this.checkAuthorization(user, allowed);
}
canDelete(user: User): boolean {
  const allowed = ['admin'];
  return this.checkAuthorization(user, allowed);
}
// determines if user has matching role
private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) {return false; }
    for (const role of allowedRoles) {
      if ( user.roles[role] ) {
        return true;
      }
    }
    return false;
  }

  getUsersClub() {
    return 'slkjsldfj sdflj';
  }
  getUserFollowingClubs() {
      return ['5ZRSBNKpB1u2OJ0urK0w','HYU2JPaH9ys1nKQOHKKE','U9HsplCcUBvfcV95DOoP'];

  }
}
