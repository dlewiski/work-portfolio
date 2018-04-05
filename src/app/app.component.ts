import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})

export class AppComponent {
private user;
private isLoggedIn: Boolean;
private userName: String;
title = 'Hi Anna-Marie';

constructor(public AuthenticationService: AuthenticationService, private router: Router) {
  this.AuthenticationService.user.subscribe(user => {
    if (user === null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.userName = user.displayName;
    }
  });
}

login() {
  this.AuthenticationService.signInWithGoogle();
}

logout() {
  this.AuthenticationService.logout();
}


}
