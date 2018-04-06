import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { AuthenticationService } from '../services/authentication.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { FirebaseObjectObservable } from 'angularfire2/database';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BlogService, ProjectService, AuthenticationService, AuthGuardService]
})

export class AdminComponent implements OnInit {
  currentUser: User;
  private isLoggedIn: Boolean;
  private user;

  private currentUserUID: string;

  constructor(private BlogService: BlogService,
              private ProjectService: ProjectService,
              private UserService: UserService,
              private AuthenticationService: AuthenticationService,
              private AuthGuardService: AuthGuardService) {
              }

  ngOnInit() {
    this.AuthenticationService.user.subscribe(user => {
    if (user != null) {
      this.currentUserUID = user.uid;
      }
    })

    this.UserService.getUserByUID(this.currentUserUID).subscribe(dataLastEmittedFromObserver => {
      console.log(dataLastEmittedFromObserver[0]);
      this.currentUser = new User(dataLastEmittedFromObserver[3], dataLastEmittedFromObserver[1],  dataLastEmittedFromObserver[2]);
      this.currentUser.admin = dataLastEmittedFromObserver[0];
      // console.log(this.currentUser.userName, this.currentUser.userEmail, this.currentUser.uid, this.currentUser.admin)
    });
  }

  submitBlog(title: string, postBody: string){
    let newBlogPost: Blog = new Blog(title, postBody);
    this.BlogService.addBlogPost(newBlogPost);
  }

  submitProject(projectTitle: string, description: string, challenges: string, projectUrl: string){
    let newProject: Project = new Project(projectTitle, description, challenges, projectUrl);
    this.ProjectService.addNewProject(newProject);
  }

}
