let sect = document.querySelector('section');

let list = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

for (let i = 0; i < 100; i++) {
  let element = document.createElement('div');
  element.textContent = i + 1;
  sect.appendChild(element);
  for (let j = 0; j < list.length; j++) {
    if (i === list[j]) {
      element.setAttribute('class', 'prime');
    } else {
      element.setAttribute('class', 'not-prime');
    }
  }
}
