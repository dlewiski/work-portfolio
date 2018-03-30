import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BlogService]
})

export class AdminComponent implements OnInit {

  constructor(private BlogService: BlogService) { }

  ngOnInit() {
  }

  submitBlog(title: string, postBody: string, date: string){
    let newBlogPost: Blog = new Blog(title, postBody, date);
    this.BlogService.addBlogPost(newBlogPost);
  }

}
