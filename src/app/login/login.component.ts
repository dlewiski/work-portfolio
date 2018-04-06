import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthenticationService, UserService ]
})

export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;
  authenticatedUserName: string;

  constructor(public afAuth: AngularFireAuth,
              private router: Router,
              private UserService: UserService,
              private AuthenticationService: AuthenticationService
              ) {
              this.user = afAuth.authState;
              }

  // signInWithEmail(userName: string, userEmail: string) {
  //   this.AuthenticationService.signInWithEmail(userName, userEmail);
  //   this.router.navigate(['']);
  // }

  // createAccount(userName: string, userEmail: string) {
  //   let newUser: User = new User(userName, userEmail);
  //   this.UserService.createNewUser(newUser);
  // }

  ngOnInit() {
  }

  // login() {
  //   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  //   .then(signedInUser => {
  //      if (signedInUser) {
  //        let uid = firebase.auth().currentUser.uid;
  //        this.authenticatedUserName = uid;
  //        this.UserService.userExists(uid).subscribe(user => {
  //          if (!user) {
  //            const newUser = new User(
  //              signedInUser.user.displayName, signedInUser.user.uid, signedInUser.user.email
  //            );
  //            this.UserService.createNewUser(newUser);
  //          }
  //        });
  //      }
  //    });
  //  }

}
