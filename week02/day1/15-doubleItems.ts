'use strict'
let names = [{brand: 'Gin'}, {brand: 'Whiskey'}, {brand: 'Wine'}, {brand: 'Beer'}]
let doubleNames = names.map(function(x){
    return names[x.brand] + names[x.brand];
});
console.log(doubleNames);