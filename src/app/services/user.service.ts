import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) { }

  doesUserExist(username: string){

  }

  createNewUser(newUser: User){
    this.users.push(newUser);
  }
}
