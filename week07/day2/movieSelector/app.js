
const show = () => {
  remover('.Drama');
  remover('.Sci-fi');
  remover('.Comedy');
  adder(document.querySelector('#drama'), document.querySelectorAll('.Drama'));
  adder(document.getElementById('scifi'), document.querySelectorAll('.Sci-fi'));
  adder(document.getElementById('comedy'), document.querySelectorAll('.Comedy'));
};

const writeIt = () => {
  writer(document.getElementById('moon'));
  writer(document.getElementById('space'));
  writer(document.getElementById('contact'));
  writer(document.getElementById('hour'));
  writer(document.getElementById('blood'));
  writer(document.getElementById('beauty'));
  writer(document.getElementById('plane'));
  writer(document.getElementById('deadpool'));
  writer(document.getElementById('wayne'));
};

const writer = (e) => {
  if (e.selected) {
    document.querySelector('span').textContent = `The selected movie is: ${e.textContent}`
  };
};

const remover = (g) => {
  document.querySelectorAll(g).forEach(e => {
    e.classList.remove('visible');
  });
};

const adder = (a, b) => {
  if (a.selected === true) {
    b.forEach(e => {
      e.classList.add('visible');
    });
  };
};

document.querySelector('.genre').addEventListener('change', show);
document.querySelector('.movie').addEventListener('change', writeIt);