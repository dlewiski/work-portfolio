import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string;
  projectToDisplay: Project;
  photos = [];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private ProjectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.ProjectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.photos = []
      this.projectToDisplay = new Project(dataLastEmittedFromObserver.projectTitle,
                                   dataLastEmittedFromObserver.description,
                                   dataLastEmittedFromObserver.challenges,
                                   dataLastEmittedFromObserver.gitURL, dataLastEmittedFromObserver.deployedURL, dataLastEmittedFromObserver.photoHeader,
                                   dataLastEmittedFromObserver.photoArray.forEach(thisPhoto => {
                                     this.photos.push(thisPhoto);
                                   })
                                 );
    });
  }

  swapPhoto(photoToSwap: string) {
    this.photos.forEach((photo, i) => {
      if (photo === photoToSwap){
        this.photos.splice(i,1);
      }
    });
    let tempPhotoHolder01: string = this.projectToDisplay.photoHeader;
    let tempPhotoHolder02: string = photoToSwap;
    this.projectToDisplay.photoHeader = photoToSwap;
    this.photos.push(tempPhotoHolder01);
  }

  login() {
    this.projectToDisplay.login();
  }

}
