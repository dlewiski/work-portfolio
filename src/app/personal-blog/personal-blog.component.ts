import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog.model';
import { Router } from '@angular/router'
import { BlogService } from '../blog.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-personal-blog',
  templateUrl: './personal-blog.component.html',
  styleUrls: ['./personal-blog.component.css'],
  providers: [BlogService]
})
export class PersonalBlogComponent implements OnInit {
  blogs: FirebaseListObservable<any[]>;

  constructor(private router: Router, private BlogService: BlogService) { }

  ngOnInit() {
    this.blogs = this.BlogService.getBlogPosts();
  }

  goToBlogPostDetail(clickedBlog) {
    this.router.navigate(['blogs', clickedBlog.$key]);
  };
}
