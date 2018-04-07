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
  authenticatedUserUID: string;
  private userDetails: firebase.User = null;


  constructor(private router: Router, public afAuth: AngularFireAuth, public userService: UserService) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(signedInUser => {
       if (signedInUser) {
         let uid = firebase.auth().currentUser.uid;
         this.authenticatedUserUID = uid;
         console.log("In Login: " + this.authenticatedUserUID)
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
      return true;
    }
  }

  isAdmin() {
    if (this.authenticatedUserUID === "wyFj5q0DX2dVJybVVUgSgF6QWw33" ) {
      console.log(this.authenticatedUserUID + "this means you ARE an admin")
      return true;
    } else {
      console.log(this.authenticatedUserUID + "this means you ARE NOT an admin")
      return false;
    }
  }
}
