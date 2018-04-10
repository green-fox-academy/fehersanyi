const Shuffler = {
  dollars: 10000,
  pick() {
    let land;
    let witchLand = Math.random();
    if(witchLand > 0.5) {
      land = Panama;
    } 
    else {
      land = Cyprus;
    }
    land.cash += 1000;
    this.dollars -= 1000;
    console.log(`${land.name} got ${1000}`);
  },
}

const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
  }
}
;
const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amt) {
  }
};

Shuffler.pick();
Shuffler.pick();
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log(Panama.cash); // 2000 
console.log(Cyprus.cash); // 2000 