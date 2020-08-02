export function random() {
  return randomYear();
}

export function randomYear() {
  return new Array(53).fill(null).map(randomWeek);
}

export function randomWeek() {
  return new Array(7).fill(null).map(() => getRandomInt(0, 4));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
