let apple = document.getElementsByClassName('apple');
console.log(apple);

let banana = document.getElementsByClassName('balloon');
console.log(banana[0]);

let car = document.getElementsByClassName('cat');
console.log(car[0]);

let animals = document.querySelector('.animals');
console.log(animals);

apple[0].innerHTML = animals.innerHTML;
banana[0].innerHTML = animals.innerHTML;
car[0].innerHTML = animals.innerHTML;