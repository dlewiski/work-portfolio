import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BlogService {
  blogs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.blogs = database.list('blogs');
  }

  getBlogPosts(){
     return this.blogs;
   }

  addBlogPost(newBlogPost: Blog){
    this.blogs.push(newBlogPost);
  }

  getBlogById(blogId: string){
    return this.database.object('blogs/' + blogId);
  }

}
