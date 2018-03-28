let list =  document.getElementsByTagName('li');
let btn = document.querySelector('button');
let result = document.querySelector('.result');
let rewrite = () => {
  result.textContent = list.length;
}
btn.addEventListener('click', rewrite);