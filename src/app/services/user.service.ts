import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  currentUserUID: string;
  returnedUser: FirebaseListObservable<User[]>;
  constructor(public database: AngularFireDatabase) { }


  getUserByUID(userUID: string): FirebaseListObservable<any[]> {
    // console.log("In function: " + userUID);
    return this.database.list(`users`, {query: {orderByChild: 'uid', equalTo: userUID}});
  }

  createNewUser(newUser: User): void {
    this.database.list(`users`).push(newUser);
  }

  userExists(uid: string): Observable<boolean> {
    return this.getUserByUID(uid).map(data => !!data[0]);
   }

  filterUser(uid: string): FirebaseListObservable<any[]> {
    console.log("In function: " + uid);
    this.returnedUser = this.database.list('/users', {
        query: {
            orderByChild: 'uid',
            equalTo: uid,
        }
    });
    console.log(this.returnedUser)
    return this.returnedUser;
  }

}
