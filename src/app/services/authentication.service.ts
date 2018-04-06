import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { UserService } from '../services/user.service';
import { User } from '../models/user.model'

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  authenticatedUsername: string;


  private userDetails: firebase.User = null;
  // private admin: firebase.User.admin


  constructor(private router: Router, public afAuth: AngularFireAuth, public userService: UserService) {
    this.user = afAuth.authState;
  }

  signInWithEmail(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(signedInUser => {
       if (signedInUser) {
         let uid = firebase.auth().currentUser.uid;
         this.authenticatedUsername = uid;
         this.userService.userExists(uid).subscribe(user => {
           if (!user) {
             const newUser = new User(
             signedInUser.user.displayName, signedInUser.user.uid, signedInUser.user.email);
             this.userService.createNewUser(newUser);
           }
         });
       }
     });
   }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

  isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      console.log(this.userDetails);
      return true;
    }
  }

}
