let request = new XMLHttpRequest();
let searched = document.querySelector('#kablam');
let btn = document.getElementById('btn');
let theName = document.querySelector('h3');
let chars = document.querySelector('#chars')
let films = document.querySelector('#films')
searched.value = '';


function trigger() {
  request.open('GET', `https://swapi.co/api/people/`, true);
  request.onload = function () {
    let dataBase = (JSON.parse(request.response));
    dataBase.results.forEach(e => {
      if (e.name.toLowerCase().includes(searched.value.toLowerCase())) {
        theName.innerText = e.name;
        let height = document.createElement('li');
        height.innerText = `Height: ${e.height}`;
        chars.appendChild(height)
        let mass = document.createElement('li');
        mass.innerText = `Weight: ${e.mass}`;
        chars.appendChild(mass)
        let hair = document.createElement('li');
        hair.innerText = `Hair: ${e.hair_color}`;
        chars.appendChild(hair)
        let skin = document.createElement('li');
        skin.innerText = `Skin color: ${e.skin_color}`;
        chars.appendChild(skin)
        let eyes = document.createElement('li');
        eyes.innerText = `Eye color: ${e.eye_color}`;
        chars.appendChild(eyes)
        let birth = document.createElement('li');
        birth.innerText = `Birth date: ${e.gender}`;
        chars.appendChild(birth)
        let gender = document.createElement('li');
        gender.innerText = e.gender;
        chars.appendChild(gender)
      }
    });
    theName.addEventListener('click', () => {
      for (let i = 0; i < 10; i++) {
        if (dataBase.results[i].name.toLowerCase().includes(searched.value.toLowerCase())) {
          for (let j = 0; j < dataBase.results[i].films.length; j++) {
            let link = document.createElement('a');
            let li = document.createElement('li');
            link.innerText = dataBase.results[i].films[j];
            link.href = dataBase.results[i].films[j];
            li.appendChild(link);
            films.appendChild(li);
          }
        }
      }
    });
  }
  request.send();
};

btn.addEventListener('click', () => {
  trigger();
});
searched.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    trigger();
  }
});