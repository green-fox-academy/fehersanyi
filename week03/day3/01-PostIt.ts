'use strict';

class postIt {
  private backgroundColor: string;
  private textColor: string;
  private content: string;

  constructor (backgroundColor, textColor, content) {
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
    this.content = content;

  }

  set setbgColor (bcColor) {
    this.backgroundColor = bcColor;
  }
  set settxtColor (txtColor) {
    this.textColor = txtColor;
  }
  set setmessege (messege) {
    this.content = messege;
  }
  getData () {
    console.log(this.backgroundColor);
    console.log(this.textColor);
    console.log(this.content); 
  }
}

let orangeOne = new postIt('orange', 'blue', 'idea 1');
let pinkOne = new postIt('pink', 'black', 'awsome');
let yellowOne = new postIt('yellow', 'green', 'superb');

orangeOne.getData();
pinkOne.getData();
yellowOne.getData();


