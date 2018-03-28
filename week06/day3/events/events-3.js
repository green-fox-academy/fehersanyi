let display = document.querySelector('h1');

window.addEventListener('keyup', e => {
  console.log(e);
  display.textContent = `The last pressed key code is: ${e.keyCode}`;
});