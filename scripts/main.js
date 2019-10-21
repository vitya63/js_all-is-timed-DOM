'use strict';

const timer = document.querySelector('#timer');

if (!localStorage.hasOwnProperty('timer')) {
  localStorage.setItem('timer', 0);
}
timer.textContent = localStorage.getItem('timer');

setInterval(() => {
  localStorage.timer = Number(localStorage.timer) + 1;
  timer.textContent = localStorage.getItem('timer');
}, 1000);
