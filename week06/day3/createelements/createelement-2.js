const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

let list = document.querySelector('ul.asteroids');
let king = document.querySelector('li');
list.removeChild(king);

for(let i = 0; i < planetData.length; i++) {
  let newAsteroids = [];
  if(planetData[i].asteroid == true) {
    newAsteroids[i] = document.createElement('li');
    newAsteroids[i].className = planetData[i].category;
    newAsteroids[i].textContent = planetData[i].content;
    list.appendChild(newAsteroids[i])
  }
}