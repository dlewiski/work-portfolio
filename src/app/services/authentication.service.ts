import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private router: Router, public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  signInWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

  isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }


}
