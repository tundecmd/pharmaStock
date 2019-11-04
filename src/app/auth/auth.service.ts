import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;

  constructor(private _fbAuth: AngularFireAuth, private router: Router, private _firestore: AngularFirestore) {
    this.user = _fbAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          localStorage.setItem('user', JSON.stringify(this.userDetails));
          JSON.parse(localStorage.getItem('user'));
        } else {
          this.userDetails = null;
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      },
    );
  }

  // main service functions
  /* Login function */
  login(email, password) {
    return this._fbAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /* register function */
  register(email, password, fullname, role) {
    return this._fbAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((afUser) => {
        afUser.user.updateProfile({
          displayName: fullname,
          photoURL: '',
        }).then(() => afUser.user.sendEmailVerification());

        // store user info in firestore
        this._firestore.firestore.collection('users').doc(afUser.user.uid).set({
          uid: afUser.user.uid,
          role: role,
        });
      });
  }

  /* isloggedin method */
  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  /* logout function */
  logout() {
    this._fbAuth.auth.signOut()
      .then((res) => this.router.navigate(['auth/login']));
  }
}
