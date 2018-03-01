'use strict';

import {BlogPost} from './02-BlogPost'

class Blog {
  private blogs: BlogPost[] = [];

  add(blog) {
    this.blogs.push(blog);
  }

  deleter(entry: BlogPost, i: number) {
    this.blogs = this.blogs.splice(i, 1)
  }

  update(entry: BlogPost, i: number) {
    this.blogs = this.blogs.splice(i, 0);
  }
}
let blogs = new Blog;