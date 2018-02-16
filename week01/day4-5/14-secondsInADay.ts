'use strict';
let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

// sec x min x hour
let allSeconds: number = 60 * 60 * 24;
let beenThere: number = 42 + (currentMinutes * 60) + (currentHours * 60 * 60);
console.log((allSeconds - beenThere) + ' seconds are left from the day.');