let apple = document.querySelector('.apple');
console.log(apple);
let dolphin = document.querySelectorAll('p');
console.log(dolphin[3])
dolphin[3].setAttribute('class', 'dolphin')
console.log(dolphin)

if (dolphin[3].className == 'dolphin') {
  apple.innerHTML = 'pear';
}
if(dolphin[0].className == 'apple') {
  dolphin[2].innerHTML = 'dog';
}
dolphin[0].setAttribute('class','red');
dolphin[1].style.borderRadius = 0;