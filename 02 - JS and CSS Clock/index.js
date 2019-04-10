const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const calcDegrees = (curVal, maxVal) => (curVal / maxVal) * 360 + 90;

const transformCb = () => {
  const now = new Date();

  const secondDegrees = calcDegrees(now.getSeconds(), 60);
  const minuteDegrees = calcDegrees(now.getMinutes(), 60);
  const hourDegrees = calcDegrees(now.getHours(), 12);

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(transformCb, 1000);
