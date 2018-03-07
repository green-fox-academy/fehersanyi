'use strict';
import { Domino } from '../../week03/day3/domino'
import { Thing } from '../../week03/day3/thing'
let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

console.log(dominoes.sort(function (a: Domino , b: Domino) : number {
  return a.compareTo(b);
}));

let things: Thing[] = [];
things.push(new Thing('giveUp'));
things.push(new Thing('killMyself'));
things.push(new Thing('solve the problem'));
things.push(new Thing('live a happy life'));
things[0].complete();
things[2].complete();


console.log(things.sort(function (a: Thing , b: Thing) : number {
  return a.compareTo(b);
}));
