import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import * as _ from 'lodash';
import { Upload } from '../models/uploads.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UploadService {
  uploads: FirebaseListObservable<any[]>;
  private basePath:string = '/uploads';

  constructor(private af: AngularFireAuth, private db: AngularFireDatabase) {
    this.uploads = db.list('uploads');
  }

  getAllPhotos(){
     return this.uploads;
   }

  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        console.log(error)
      },
      () => {
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.saveFileData(upload)
      }
    );
  }

  private saveFileData(upload: Upload) {
     this.db.list(`${this.basePath}/`).push(upload);
  }

  deleteUpload(upload: Upload) {
   this.deleteFileData(upload.$key)
   .then( () => {
     this.deleteFileStorage(upload.name)
   })
   .catch(error => console.log(error))
  }

 private deleteFileData(key: string) {
   return this.db.list(`${this.basePath}/`).remove(key);
 }

 private deleteFileStorage(name:string) {
   let storageRef = firebase.storage().ref();
   storageRef.child(`${this.basePath}/${name}`).delete()
 }


}
