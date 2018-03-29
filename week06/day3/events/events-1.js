let btn = document.querySelector('button');
let party = () => {
  btn.setAttribute('class', 'party');
};
btn.addEventListener('click', party);
