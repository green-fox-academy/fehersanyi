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
getNameAndBalance(accounts);

function transferAmount (tam: any[], fan: number, tan: number, act: number) {
    let cloudOfMoney: number = 0;
    if (fan || tan !== accounts[1].account_number || accounts[2].account_number || accounts[3].account_number) {
        console.log('404 - account not found');
    } else {
        cloudOfMoney = act;
        tam[2].balance -= cloudOfMoney;
        tam[3].balance += cloudOfMoney;
        console.log(tam[2], fan, tam[2].balance);
        console.log(tam[3], tan, tam[3].balance)
    }
}
transferAmount(accounts, accounts[2].account_number, accounts[3].account_number, 500);

export = {
  getNameAndBalance,
  transferAmount,
  //accounts
};