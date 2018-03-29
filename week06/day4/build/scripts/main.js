let descriptions = [
  'He is doge one, woow he is cool',
  'he is doge two, much image such design wooow',
  "doge three in da' house",
  'this is a casual joke about css',
  'this is my second joke about css, funny hehe',
  'ths is called badmounthing'
]
let titles = [
  'DOGE ONE',
  'DOGE TWO',
  'DOGE THREE',
  'JOKE ONE',
  'JOKE TWO',
  'JOKE THREE',
]
let body = document.querySelector("body");
let title = document.querySelector("h2");
let desc = document.querySelector("p");
let pics = document.querySelectorAll(".thumbnails img");
let viewer = document.querySelector(".viewer");
let btn1 = document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let counter = 0;

btn1.addEventListener('click', () => {
  if (counter === 0) {
    counter = pics.length;
  }
  counter--;
  viewer.style.backgroundImage = `url('${pics[counter].src}')`;
  desc.textContent = descriptions[counter];
  title.textContent = titles[counter];
});

body.addEventListener('keydown', (e) => {
  if (e.keyCode === 37) {
    if (counter === 0) {
      counter = pics.length;
    }
    counter--;
    viewer.style.backgroundImage = `url('${pics[counter].src}')`;
    desc.textContent = descriptions[counter];
    title.textContent = titles[counter];
  }
});

btn2.addEventListener('click', () => {
  counter++;
  if (counter === pics.length) {
    counter = 0;
  }
  viewer.style.backgroundImage = `url('${pics[counter].src}')`;
  desc.textContent = descriptions[counter];
  title.textContent = titles[counter];
});

body.addEventListener('keydown', (e) => {
  if (e.keyCode === 39) {
    counter++;
    if (counter === pics.length) {
      counter = 0;
    }
    viewer.style.backgroundImage = `url('${pics[counter].src}')`;
    desc.textContent = descriptions[counter];
    title.textContent = titles[counter];
  }
});

pics[0].addEventListener('click', () => {
  viewer.style.backgroundImage = `url('${pics[0].src}')`;
  desc.textContent = descriptions[0];
  title.textContent = titles[0];
});

pics[1].addEventListener('click', () => {
  viewer.style.backgroundImage = `url('${pics[1].src}')`;
  desc.textContent = descriptions[1];
  title.textContent = titles[1];
});

pics[2].addEventListener('click', () => {
  viewer.style.backgroundImage = `url('${pics[2].src}')`;
  desc.textContent = descriptions[2];
  title.textContent = titles[2];
});

pics[3].addEventListener('click', () => {
  viewer.style.backgroundImage = `url('${pics[3].src}')`;
  desc.textContent = descriptions[3];
  title.textContent = titles[3];
});

pics[4].addEventListener('click', () => {
  viewer.style.backgroundImage = `url('${pics[4].src}')`;
  desc.textContent = descriptions[4];
  title.textContent = titles[4];
});

pics[5].addEventListener('click', () => {
  viewer.style.backgroundImage = `url('${pics[5].src}')`;
  desc.textContent = descriptions[5];
  title.textContent = titles[5];
});