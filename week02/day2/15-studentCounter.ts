'use strict';

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candies (inPut: any[]) {
    let allCandy: number = 0;
    for (let i: number = 0; i < inPut.length; i++) {
        allCandy += inPut[i].candies   
    }
    console.log('The students own ' + allCandy + ' cadies together.');
}
candies(students);

function ownedCandies (src: any[]) {
    for (let j: number = 0; j < src.length; j++) {
        console.log(src[j].name, 'owns ',  src[j].candies);
    }
}
ownedCandies(students);

function sumOfAges (nyerk: any[]) {
    let ages: number = 0    
    for (let k: number = 0; k < nyerk.length; k++) {
        if (nyerk[k].candies < 5)
        ages += nyerk[k].age;
    }
    console.log('the sum of the ages of loosers are ' + ages);
}
sumOfAges(students);