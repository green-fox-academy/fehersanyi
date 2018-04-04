const dog = document.getElementById('Dog');
const cat = document.getElementById('Cat');
const fish = document.getElementById('Goldfish');
const yes = document.getElementById('Yes');
const no = document.getElementById('No');
const ilc = document.getElementById('ilc');
const signup = document.getElementById('signup');

const enable = () => {
  signup.disabled = true;
  ilc.disabled = true;
  signup.disabled = false;
  if (dog.checked || cat.checked) {
    ilc.disabled = false;
  }
}

const shout = () => {
  if (ilc.disabled === false && fish.checked === false) {
    alert('Thank you, you\'ve successfully signed up for cat facts');
  } else {
    alert('Sigh, we still added you to the cat facts list');
  }
}

cat.addEventListener('change', enable);
dog.addEventListener('change', enable);
fish.addEventListener('change', enable);
signup.addEventListener('click', shout);
ilc.addEventListener('click', shout);
