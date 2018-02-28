'use strict';

import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}
let dominoesInOrder: Domino [] = [];
function orderer (inPut: Domino[]) {
  dominoesInOrder.push(inPut[0]);
  for (let i: number = 0; i < inPut.length - 1; i++) {
    let leftNumber = dominoesInOrder[i].values[1];
    for (let j: number = 0; j < inPut.length; j++) {
      let rightNumber = inPut[j].values[0]
      if (leftNumber === rightNumber) {
      
      dominoesInOrder.push(inPut[j]);
      // inPut.push(dominoesInOrder[i]);
      }
    }
  }

  return dominoesInOrder;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */


//print(dominoes);
console.log(orderer(dominoes));