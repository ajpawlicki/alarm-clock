window.onload = () => {
  const hoursEl = document.querySelector('.hours');
  const minutesEl = document.querySelector('.minutes');
  const secondsEl = document.querySelector('.seconds');

  const alarmEl = document.getElementById('alarm');
  const submitEl = document.getElementById('submit');

  const alarmHoursEl = document.querySelector('.alarm-hours');
  const alarmMinutesEl = document.querySelector('.alarm-minutes');
  const alarmSecondsEl = document.querySelector('.alarm-seconds');

  let time = null;
  let alarmTime = null;

  setInterval(() => {
    const {hours, minutes, seconds} = getTime();
    time = setTime(hours, minutes, seconds);

    if (timesAreEqual(alarmTime, time)) playAlarm(alarmEl);

    renderTime(hoursEl, minutesEl, secondsEl, time);
  }, 1000);

  submitEl.addEventListener('click', () => {
    alarmTime = setTime(+alarmHoursEl.value, +alarmMinutesEl.value, +alarmSecondsEl.value);
  });
};

function renderTime(hoursEl, minutesEl, secondsEl, {hours, minutes, seconds}) {
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}

function getTime() {
  const date = new Date();
  
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  };
}

function setTime(hours, minutes, seconds) {
  return {hours, minutes, seconds};
}

function timesAreEqual(time1, time2) {
  if (time1 && time2) {
    return time1.hours === time2.hours && time1.minutes === time2.minutes && time1.seconds === time2.seconds;
  }
  return null;
}

function playAlarm(alarmEl) {
  alarmEl.play();
}

function isValidTime(hours, minutes, seconds) {
}

function isValidHours(num) {
}

function isValidMinutesOrSeconds(num) {
}

module.exports = {
  renderTime,
  getTime,
  timesAreEqual,
  setTime
};