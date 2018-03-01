'use strict'

class BlogPost {
  private authorname: string;
  private title: string;
  private text: string;
  private publicationDate: string;
  constructor(authorName, title, text, publicationDate){
    this.authorname = authorName;
    this.title = title;
    this.text = text;
    this.publicationDate = publicationDate;
  }
  getInfo() {
    console.log(this.authorname);
    console.log(this.title);
    console.log(this.text);
    console.log(this.publicationDate);
  }
}

let lorem = new BlogPost (
  'John Doe', 
  'Lorem Ipsun',
  'Loren ipsum dolor sit amen',
  '2000.05.04');
let waitButWhy = new BlogPost (
  'Tim Urban',
  'Wait but why',
  'A popular long-firm, stick-figure-illustrated blog about almost everything.',
  '2017.03.28');
let ibm = new BlogPost (
  'William Turton',
  'One Engineer is Trying to Get IBM to Reckogn With Trump',
  'Daniel Hanley, a cybersecurity engineer at IBM, doesen\'t want to be the center of attention. When I asked to take his icture outside of IBM\'s New York offices, he told me that he wasn\'t really into the whole organiyer profile thing.',
  '2017.03.28');

  lorem.getInfo();
  waitButWhy.getInfo();
  ibm.getInfo();

  export {BlogPost};