const scifi = document.getElementById('scifi');
const drama = document.querySelector('#drama');
const comedy = document.getElementById('comedy');
const genres = document.querySelector('.genre');
const movies = document.querySelector('.movie');
const selected = document.querySelector('span');
const moon = document.getElementById('moon')
const space = document.getElementById('space')
const contact = document.getElementById('contact')
const hour = document.getElementById('hour')
const blood = document.getElementById('blood')
const beauty = document.getElementById('beauty')
const plane = document.getElementById('plane')
const deadpool = document.getElementById('deadpool')
const wayne = document.getElementById('wayne')

const show = () => {
  console.log(selected.textContent)
  document.querySelectorAll('.Drama').forEach(e => {
    e.classList.remove('visible');
  });
  document.querySelectorAll('.Sci-fi').forEach(e => {
    e.classList.remove('visible');
  });
  document.querySelectorAll('.Comedy').forEach(e => {
    e.classList.remove('visible');
  });
  if (drama.selected === true) {
    document.querySelectorAll('.Drama').forEach(e => {
      e.classList.add('Drama', 'visible');
    });
  };
  if (scifi.selected === true) {
    document.querySelectorAll('.Sci-fi').forEach(e => {
      e.classList.add('Sci-fi', 'visible');
    });
  };
  if (comedy.selected === true) {
    document.querySelectorAll('.Comedy').forEach(e => {
      e.classList.add('Comedy', 'visible');
    });
  };
};

const writeIt = () => {
  if (moon.selected) {
    selected.textContent = `The selected movie is: ${moon.textContent}`
  };
  if (space.selected) {
    selected.textContent = `The selected movie is: ${space.textContent}`
  };
  if (contact.selected) {
    selected.textContent = `The selected movie is: ${contact.textContent}`
  };
  if (hour.selected) {
    selected.textContent = `The selected movie is: ${hour.textContent}`
  };
  if (blood.selected) {
    selected.textContent = `The selected movie is: ${blood.textContent}`
  };
  if (beauty.selected) {
    selected.textContent = `The selected movie is: ${beauty.textContent}`
  };
  if (plane.selected) {
    selected.textContent = `The selected movie is: ${plane.textContent}`
  };
  if (deadpool.selected) {
    selected.textContent = `The selected movie is: ${deadpool.textContent}`
  };
  if (wayne.selected) {
    selected.textContent = `The selected movie is: ${wayne.textContent}`
  };
};

genres.addEventListener('change', show);
movies.addEventListener('change', writeIt);