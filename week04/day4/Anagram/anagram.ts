'use strict'

export class Anagramm {
  anagramm(word1: string, word2: string):boolean {
    return word1.split('').reverse().join('').toLowerCase() === word2.toLowerCase();
  }
}
let kek = new Anagramm();
console.log(kek.anagramm('loL', 'lol'));