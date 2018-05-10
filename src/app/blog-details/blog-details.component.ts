import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Blog } from '../models/blog.model';
import { BlogService } from '../services/blog.service';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
  providers: [BlogService]
})
export class BlogDetailsComponent implements OnInit {

  blogId: string;
  blogToDisplay: Blog;
  photos = [];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private BlogService: BlogService,
              private sanitizer: DomSanitizer) {  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.blogId = urlParameters['id'];
    });
    this.BlogService.getBlogById(this.blogId).subscribe(dataLastEmittedFromObserver => {
      this.photos = []
      this.blogToDisplay = new Blog(dataLastEmittedFromObserver.title,
                                   dataLastEmittedFromObserver.postBody,
                                   dataLastEmittedFromObserver.blogTag,
                                   dataLastEmittedFromObserver.blogHeader,
                                   dataLastEmittedFromObserver.photoArray.forEach(thisPhoto => {
                                     this.photos.push(thisPhoto);
                                   })
                                 );
      this.blogToDisplay.date = dataLastEmittedFromObserver.date;
      this.blogToDisplay.author = dataLastEmittedFromObserver.author;
    });
  }


  swapPhoto(photoToSwap: string) {
    this.photos.forEach((photo, i) => {
      if (photo === photoToSwap){
        this.photos.splice(i,1);
      }
    });
    let tempPhotoHolder01: string = this.blogToDisplay.blogHeader;
    let tempPhotoHolder02: string = photoToSwap;
    this.blogToDisplay.blogHeader = photoToSwap;
    this.photos.push(tempPhotoHolder01);
  }

  cleanHTML(unsafeHTML) {
    return this.sanitizer.bypassSecurityTrustHtml(unsafeHTML);
  }
}
