
let btn = document.querySelector('button');
let div = document.querySelector('div');

btn.addEventListener('click', () => {
fetch('http://api.icndb.com/jokes/random')
	.then((response) => response.json())
	.then((jokesOnYou) => {
	let joke = document.createElement('p');
	joke.innerText = jokesOnYou.value.joke
	div.appendChild(joke);
})
	
});