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
  title = 'pdxflit';
  private isLoggedIn: boolean;
  private userName: string;
  private userUID: string;

  user;
  databaseUser;

  constructor(private router: Router, public authService: AuthenticationService, public userService: UserService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.userUID = user.uid;
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
