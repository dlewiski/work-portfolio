import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Blog } from '../models/blog.model';
import { BlogService } from '../blog.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
  providers: [BlogService]
})
export class BlogDetailsComponent implements OnInit {
  blogId: string;
  blogToDisplay;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private BlogService: BlogService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.blogId = urlParameters['id'];
    });
    this.blogToDisplay = this.BlogService.getBlogById(this.blogId);
  }

}
