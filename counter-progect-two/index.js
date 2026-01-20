"use ctrict";

const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

let theEndTime = new Date(2026, 1, 30, 0, 0, 0).getTime();

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function counter() {
  const intervalId = setInterval(() => {
    const now = new Date().getTime();
    const different = theEndTime - now;
    if (different < 0) {
      clearInterval(intervalId);
      addLeadingZero(0, 0, 0, 0);
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(different);
    addLeadingZero(days, hours, minutes, seconds);
  }, 1000);
}

function addLeadingZero(days, hours, minutes, seconds) {
  daysEl.textContent = String(days).padStart("2", 0);
  hoursEl.textContent = String(hours).padStart("2", 0);
  minutesEl.textContent = String(minutes).padStart("2", 0);
  secondsEl.textContent = String(seconds).padStart("2", 0);
}
counter();
