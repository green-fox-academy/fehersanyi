'use strict';

let watchlist: string[] = [];
let canGoIn: string[] = [];
let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Tibi', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];
// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival
function securityCheck(inPut: any []) {
  for (let i: number = 0; i < inPut.length; i++) {
    if (inPut[i].guns == 1) {
      watchlist = watchlist.concat(inPut[i].name);
    } else {
      canGoIn = canGoIn.concat(inPut[i].name);
    }
    if (inPut[i].alcohol >= 1) {
      securityAlcoholLoot += inPut[i].alcohol;
    }
  }
  console.log(watchlist + ' you naughty, naughty kids... you can\'t enter.');  
  console.log(canGoIn + ' you guys can go in, but please discard your hidden alcohol stack. Many thanks!')
  console.log(securityAlcoholLoot + ' bottles, nice loot today!')
}
securityCheck(queue);
export = securityCheck;