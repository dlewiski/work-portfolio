import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService, UserService]
})

export class AppComponent {
  title = 'Hi Anna-Marie';
  private isLoggedIn: boolean;
  private isAdmin: boolean;
  private userName: string;
  private userUID: string;

  user;

  constructor(private router: Router, public AuthenticationService: AuthenticationService, public userService: UserService) {
    this.AuthenticationService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.userUID = user.uid;
      }
    });

    this.AuthenticationService.user.subscribe(user => {
      if (this.userUID == "wyFj5q0DX2dVJybVVUgSgF6QWw33") {
        this.isAdmin = true;
      } else {
        this.router.navigate
      }
    });

  }

  login() {
    this.AuthenticationService.login();
  }

  logout() {
    this.AuthenticationService.logout();
  }

}
