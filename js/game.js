'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const inputMinMaxNumber = () => {
  let min = prompt('Enter the low limit');
  if (min === null) {
    alert('Bye');
    return;
  }

  if (!isNumber(min)) {
    return inputMinMaxNumber();
  }

  let max = prompt('Enter the high limit');
  if (max === null) {
    alert('Bye');
    return;
  }

  if (!isNumber(max)) {
    return inputMinMaxNumber();
  }

  min = Math.min(+min, +max);
  max = Math.max(+min, +max);

  return [min, max];
};

const [userLowLimit, userHighLimit] = inputMinMaxNumber();

const num = Math.floor((Math.random() *
  (userHighLimit - userLowLimit + 1)) + userLowLimit);
let attempts = Math.floor((userHighLimit - userLowLimit) * 0.3);

const masOfUserAttempts = [];

const playGame = () => {
  if (attempts < 1) {
    alert('Attempts left and game over');
    return;
  }

  const userNumber = prompt(`Enter number. You have ${attempts} tries.`);

  if (userNumber === null) {
    alert('Bye');
    return;
  }

  if (+userNumber === num) {
    alert('You won!');
    return;
  }

  switch (true) {
    case isNaN(userNumber) || userNumber === 0:
      alert('Enter number');
      break;
    case masOfUserAttempts.includes(userNumber):
      alert(`You'he alredy enter this number.
        You've ${attempts} ${attempts > 1 ? 'attempts' : 'attempt'}`);
      break;
    case userNumber < num:
      --attempts;
      alert(`Bigger. You have ${attempts} tries left`);
      masOfUserAttempts.push(userNumber);
      alert(masOfUserAttempts);
      break;
    case userNumber > num:
      --attempts;
      alert(`Bigger. You have ${attempts} tries left`);
      masOfUserAttempts.push(userNumber);
      alert(masOfUserAttempts);
      break;
    case +userNumber === num:
      alert('Right');
  }

  return playGame();
};

playGame();
