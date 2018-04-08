import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/uploads.service';
import { Upload } from '../models/uploads.model';
import * as _ from "lodash";

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadComponent {

  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(private uploadService: UploadService) { }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.uploadService.pushUpload(this.currentUpload)
  }

  uploadMulti() {
    let files = this.selectedFiles
    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.uploadService.pushUpload(this.currentUpload)}
    )
  }

}
