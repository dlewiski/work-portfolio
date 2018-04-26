import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { UploadService } from '../services/uploads.service';
import { AuthenticationService } from '../services/authentication.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BlogService, ProjectService, AuthenticationService, AuthGuardService, UploadService]
})

export class AdminComponent implements OnInit {
  private isLoggedIn: Boolean;
  bloggingTime = false;
  uploadTime = false;
  projectTime = false;
  private isAdmin: boolean;
  private user;
  private userName: string;
  private currentUserUID: string;
  private userEmail: string;
  uploads: FirebaseListObservable<any[]>;


  constructor(private BlogService: BlogService,
              private ProjectService: ProjectService,
              private UserService: UserService,
              private AuthenticationService: AuthenticationService,
              private router: Router,
              private AuthGuardService: AuthGuardService,
              private UploadService: UploadService) {
              }

  ngOnInit() {
    this.uploads = this.UploadService.getAllPhotos();

    this.AuthenticationService.user.subscribe(user => {
      if (user != null) {
        this.currentUserUID = user.uid;
        this.userEmail = user.email;
      }
    })

    this.AuthenticationService.user.subscribe(user => {
      if (this.currentUserUID == "wyFj5q0DX2dVJybVVUgSgF6QWw33") {
        this.isAdmin = true;
      } else {
        this.router.navigate([''])
        this.isAdmin = false;
      }
    });
  }

  submitBlog(title: string, postBody: string, blogTag: string, blogHeader: string, smallPhoto01: string, smallPhoto02: string, smallPhoto03: string, smallPhoto04: string, smallPhoto05: string, smallPhoto06: string, smallPhoto07: string){
    let photos = [smallPhoto01, smallPhoto02, smallPhoto03, smallPhoto04, smallPhoto05, smallPhoto06, smallPhoto07];
    let validPhotoArray = [];
    for (let photo of photos){
      if ( photo != ""){
        validPhotoArray.push(photo);
      }
    };
    let newBlogPost: Blog = new Blog(title, postBody, blogTag, blogHeader, validPhotoArray);
    this.BlogService.addBlogPost(newBlogPost);
  }

  submitProject(projectTitle: string, description: string, challenges: string, gitUrl: string, deployedUrl: string, photoHeader: string, smallPhoto01: string, smallPhoto02: string, smallPhoto03: string, smallPhoto04: string, smallPhoto05: string, smallPhoto06: string, smallPhoto07: string){
    let photos = [smallPhoto01, smallPhoto02, smallPhoto03, smallPhoto04, smallPhoto05, smallPhoto06, smallPhoto07];
    let validPhotoArray = [];
    for (let photo of photos){
      if ( photo != ""){
        validPhotoArray.push(photo);
      }
    };
    let newProject: Project = new Project(projectTitle, description, challenges, gitUrl, deployedUrl, photoHeader, validPhotoArray);
    this.ProjectService.addNewProject(newProject);
  }

  timeToBlog() {
    this.bloggingTime = true;
  }

  doneBlogging () {
    this.bloggingTime = false;
  }

  doneWithProjects () {
    this.projectTime = false;
  }

  timeForProjects () {
    this.projectTime = true;
  }

  doneWithUploading () {
    this.uploadTime = false;
  }

  timeForUploading () {
    this.uploadTime = true;
  }

}
