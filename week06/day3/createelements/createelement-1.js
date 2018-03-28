let list = document.querySelector('ul.asteroids');
let newLine = document.createElement('li');
newLine.setAttribute('class', 'new');
newLine.textContent = 'The Green Fox';
list.appendChild(newLine);

let lamp = document.createElement('li');
lamp.setAttribute('class', 'newlamp');
lamp.textContent = 'Lamplighter';
list.appendChild(lamp);

let container = document.querySelector('.container');
let doma = document.createElement('h1');
doma.setAttribute('class', 'header');
doma.textContent = 'I can add elements to the DOM!';
container.appendChild(doma);

