let btn = document.querySelector('button');
let text = document.querySelector('p');
let cbf = () => {
  setTimeout(() => {text.textContent = '2 seconds elapsed'}, 2000);
}
btn.addEventListener('click', cbf);