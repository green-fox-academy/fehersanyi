'use strict';

/*import {Thing} from "./thing";*/
import {Fleet} from "./fleet";
import { Thing } from "./thing";

let fleet = new Fleet();
//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */
let milk = new Thing('Get milk');
let rto = new Thing('Remove the obstacle');
let up = new Thing('Stand up');
let eat = new Thing('Eat lunch');
up.complete();
eat.complete();
fleet.add(milk);
fleet.add(rto);
fleet.add(up);
fleet.add(eat);
for (let i: number = 0; i < fleet.getThings.length; i++) {
  console.log(i + 1 + '. ' + fleet.datThing[i].isitComplete + ' ' + fleet.datThing[i].urName);  
  }








// let a;
// let b;
// for (let i: number = 0; i < 4; i++) {
//   if (Thing[i].complete() === true) {
//     a = '[x]';
//   } else {
//     b = '[ ]';
//   }
// }
// console.log(a + fleet[0]);