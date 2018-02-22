'use strict';

let accounts: any[] = [
  { client_name: 'Igor', account_number: 11234543, balance: 203004099.2 },
  { client_name: 'Vladimir', account_number: 43546731, balance: 5204100071.23 },
  { client_name: 'Sergei', account_number: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// The output should be: "Igor", "203004099.2"
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// var accounts = [
//	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
//	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204099571.23 },
//	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1354100.0 }
//]

function getNameAndBalance (nab: any[]) {
    let firstString: string[] = [];
    for (let i: number = 0; i < nab.length; i++) {
        console.log(nab[i].client_name, ', ', nab[i].balance);
    }
}
//getNameAndBalance(accounts);

function transferAmount (acc: any[], fan: number, tan: number, act: number) {
  let trs: number = 0;
  let trs2: number = 0;
  for(let i: number = 0; i < accounts.length; i++) {
    
    if(accounts[i].account_number != fan) {
    trs++
    }
    if(accounts[i].account_number != tan) {
      trs2++
      }
  }
if (trs == accounts.length || trs2 == accounts.length){
  console.log('404 - account not found');
}
for (let i: number = 0; i < acc.length; i++){
  if (acc[i].account_number == fan) {
    acc[i].balance -= act;
  } else if (acc[i].account_number == tan) {
    acc[i].balance += act;
  }
} 
console.log(accounts);
}
transferAmount(accounts, 43546731, 23456311, 500.0);

  export = {
    getNameAndBalance,
    transferAmount,
    accounts
  };
