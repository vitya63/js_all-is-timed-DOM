'use strict';

const timerContainer = document.querySelector('#timer');
const timer = 'timer';

if (!localStorage.getItem(timer)) {
  localStorage.setItem(timer, 0);
}
timerContainer.textContent = localStorage.getItem(timer);

setInterval(() => {
  localStorage.setItem(timer, Number(localStorage.getItem(timer)) + 1);
  timerContainer.textContent = localStorage.getItem(timer);
}, 1000);
