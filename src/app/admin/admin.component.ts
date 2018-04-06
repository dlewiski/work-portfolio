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
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BlogService, ProjectService, AuthenticationService, AuthGuardService]
})

export class AdminComponent implements OnInit {
  private isLoggedIn: Boolean;
  private user;
  private userName: string;
  private currentUserUID: string;
  private userEmail: string;


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
        this.currentUserUID = user.uid;
        this.userEmail = user.email;
      }
    })

    // this.UserService.filterUser(this.currentUserUID).subscribe(dataLastEmittedFromObserver => {
    //   console.log("after function: " + this.currentUserUID);
    //   this.currentUser = new User(dataLastEmittedFromObserver[0].userName, dataLastEmittedFromObserver[0].uid,  dataLastEmittedFromObserver[0].userEmail);
    //   this.currentUser.admin = dataLastEmittedFromObserver[0].admin;
    //   console.log(this.currentUser);
    // });
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
