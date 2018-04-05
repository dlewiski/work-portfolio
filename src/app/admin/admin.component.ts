import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BlogService, ProjectService]
})

export class AdminComponent implements OnInit {

  constructor(private BlogService: BlogService, private ProjectService: ProjectService) { }

  ngOnInit() {
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
