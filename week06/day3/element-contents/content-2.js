let myList = ['apple', 'banana', 'cat', 'dog'];
let ul = document.getElementsByTagName('ul');
ul[0].style.backgroundColor = 'limegreen';
let li = document.getElementsByTagName('li');

for(let i = 0; i < li.length; i++) {
  li[i].innerText = myList[i];
}