import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthenticationService, UserService ]
})
export class LoginComponent implements OnInit {
  user;

  constructor(private AuthenticationService: AuthenticationService,
              private router: Router,
              private UserService: UserService
              ) { }

  signInWithEmail(userEmail: string, userPassword: string) {
  //  this.AuthenticationService.signInRegular(userName, userEmail)
  //     .then((res) => {
  //        console.log(res);
   //
  //        this.router.navigate(['dashboard']);
  //     })
  //     .catch((err) => console.log('error: ' + err));
  }

  createAccount(userName: string, userEmail: string) {
    console.log(userName, userEmail)
    let newUser: User = new User(userName, userEmail);
    this.UserService.createNewUser(newUser);
  }

  ngOnInit() {
  }

}
