import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';


@Injectable()
export class ClubsService {

  private clubsRef: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.clubsRef = this.afs.collection('clubs');
  }

  getAllClubs() {
    return this.clubsRef.valueChanges();
  }

  getClubDetails(id) {

  }

  createClub() {

  }

  updateClub() {

  }

  deleteClub() {

  }

}
