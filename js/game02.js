'use strict';

let userNumber = 0;
let userLowLimit = 0;
let userHighLimit = 0;
let num = 0;
let attempts = 0;
let flag = true;

while(flag) {
  userLowLimit = prompt('Enter the low limit');
  
  if (userLowLimit === null) break;

  userHighLimit = prompt('Enter the high limit');

  if (userHighLimit === null) break;

  if (!isNaN(userLowLimit) && !isNaN(userHighLimit)) {
    num = Math.floor((Math.random() * (userHighLimit - userLowLimit + 1)) + userLowLimit);

    attempts = Math.floor((userHighLimit - userLowLimit) * 0.3);

    let masOfUserAttempts = [];

    while(userNumber !== null && +userNumber !== num) {
      userNumber = prompt(`Enter a number from ${userLowLimit} to ${userHighLimit}` + ' You have ' + attempts + ' attempts');

      switch(true) {
        case (userNumber === null):
          alert('The game is finished');
          break;
        case isNaN(userNumber):
          alert('Enter a number!');
          break;
        case masOfUserAttempts.includes(userNumber):
          alert(`You'he alredy enter this number. You've ${attempts} ${attempts > 1 ? 'attempts' : 'attempt'}`);
          break;
        case +userNumber < num:
          alert(`Bigger! You've ${--attempts} ${attempts > 1 ? 'attempts' : 'attempt'}`);
          masOfUserAttempts.push(userNumber);
          break;
        case +userNumber > num:
          alert(`Less! You've ${--attempts} ${attempts > 1 ? 'attempts' : 'attempt'}`);
          masOfUserAttempts.push(userNumber);
          break;
        case +userNumber === num:
          alert('Right!');
      }

      if (attempts === 0) {
        alert('You have no more attepts left');
        flag = false;
      }
    }
  } else {
    alert('Enter numbers!');
  }
}

alert('The game is finished');

