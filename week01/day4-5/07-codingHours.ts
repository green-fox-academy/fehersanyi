'use strict';
// coding hours
// with + between variables in a log you can chain them together, but you always have to have a space between them.
// you can use math characters even when you type the name of the variable.
let codinHours: number = 6;
let numbOfWeeks: number = 17;
let codinDays: number =5;
console.log('An avarage attendee codes ' + codinHours * codinDays * numbOfWeeks + ' hours during the semester.');
let weeklyCodinHours: number = 52;
let hoursADay: number = 24;
console.log('if an attendee codes every day then he/she codes ' + ((numbOfWeeks * weeklyCodinHours*100) / (numbOfWeeks * hoursADay * 7)) + ' \% of the semester.');
