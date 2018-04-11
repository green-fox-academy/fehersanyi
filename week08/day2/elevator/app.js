const btn = document.querySelectorAll('[data-change]')
const adder = document.querySelector('.adder');
const remover = document.querySelector('.remover');
const elevator = document.querySelector('.elevator');
const floors = document.getElementsByClassName('floor');

adder.addEventListener('click', () => {
  if (elevator.textContent < 10) {
    elevator.textContent++;
  }
});

remover.addEventListener('click', () => {
  if (elevator.textContent >= 1) {
    elevator.textContent--;
  }
});

btn.forEach(e => {
  e.addEventListener('click', (e) => {
    change = parseInt(e.target.getAttribute('data-change'), 10)
    current = parseInt(elevator.parentElement.getAttribute('data-floor'), 10);
    next = document.querySelector(`[data-floor="${current + change}"]`);
    if (next !== null) {
      next.appendChild(elevator);
    }
  })
});
