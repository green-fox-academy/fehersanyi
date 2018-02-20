'use strict';

let students: any[] = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreCandies (inPut: any[]) {
    for (let i: number = 0; i < inPut.length; i++) {
        if (inPut[i].candies > 4) {
            console.log(inPut[i].name, ' got more than four.')
        }
    }
}
moreCandies(students);

function avarageCandies (gotThem: any[]) {
    let allCandies: number = 0;
    for (let j: number = 0; j < gotThem.length; j++) {
        allCandies += gotThem[j].candies;
    }
    console.log('on avarage they own ' + allCandies/(gotThem.length+1) + ' candies.');
}
avarageCandies(students);