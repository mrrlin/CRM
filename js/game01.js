'use strict';

const guessNumber = num => {
  const guessNumber = Math.floor((Math.random() * 100) + 1);

  return guessNumber;
};

let userNumber = 0;

const num = guessNumber();

while (userNumber !== null && +userNumber !== num) {
  userNumber = prompt('Enter a number from 1 to 100');

  switch(true) {
    case (userNumber === null):
      alert('The game is finished');
      break;
    case isNaN(userNumber):
      alert('Enter a number!');
      break;
    case userNumber < num:
      alert('Bigger!');
      break;
    case userNumber > num:
      alert('Less!');
      break;
    case userNumber === num:
      alert('Right!');
  }
}