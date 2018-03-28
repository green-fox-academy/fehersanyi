let btn = document.querySelector('button');
let text = document.querySelector('p');
let counter = 0;

let adder = () => {
  counter++;
  console.log(counter);
  if (counter >= 3) {
    text.textContent = '5 seconds ellapsed and clicked 3 times';
  }
}

btn.addEventListener('click', adder);
