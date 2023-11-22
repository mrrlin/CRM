'use strict';

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const inputMinMaxNumber = () => {
  let min = prompt('Enter the low limit');
    if (!isNumber(min)) {
      return inputMinMaxNumber();
    }
  let max = prompt('Enter the high limit');
    if(!isNumber(max)) {
      return inputMinMaxNumber();
    }
  return [min, max];
}

const startGame = () => {
  const [userLowLimit, userHighLimit] = inputMinMaxNumber();
  const num = Math.floor((Math.random() * (userHighLimit - userLowLimit + 1)) + userLowLimit);
  const attempts = Math.floor((userHighLimit - userLowLimit) * 0.3);

  const playGame = (attempt, num) => {

    console.log(`attempt: ${attempt}, number: ${num}`);

    if (attempt < 1) {
      alert('Attempts left and game over');
      return;
    }

    const userNumer = prompt('Enter number:');

    if(userNumer === null) {
      alert('Bye');
      return;
    } 
    if(!isNumber(userNumer)) {
      alert('Only numbers!!!');
      playGame(attempt, num);
    } 
    if (userNumer === num) {
      alert('Gracia, you won!!!');
      return;
    }
    if (userNumer > num) {
      attempt--;
      alert(`The number is less, attempt left: ${attempt}`);
      playGame(attempt, num);
    }
    if (userNumer < num) {
      attempt--;
      alert(`The number is greater, attempt left: ${attempt}`);
      playGame(attempt, num);
    }
    
  }

  playGame(attempts, num);

}

startGame();

// let userNumber = 0;
// let userLowLimit = 0;
// let userHighLimit = 0;
// let num = 0;
// let attempts = 0;
// let flag = true;

// while(flag) {
//   userLowLimit = prompt('Enter the low limit');
  
//   if (userLowLimit === null) break;

//   userHighLimit = prompt('Enter the high limit');

//   if (userHighLimit === null) break;

//   if (!isNaN(userLowLimit) && !isNaN(userHighLimit)) {
//     num = Math.floor((Math.random() * (userHighLimit - userLowLimit + 1)) + userLowLimit);

//     attempts = Math.floor((userHighLimit - userLowLimit) * 0.3);

//     let masOfUserAttempts = [];

//     while(userNumber !== null && +userNumber !== num) {
//       userNumber = prompt(`Enter a number from ${userLowLimit} to ${userHighLimit}` + ' You have ' + attempts + ' attempts');

//       switch(true) {
//         case (userNumber === null):
//           alert('The game is finished');
//           break;
//         case isNaN(userNumber):
//           alert('Enter a number!');
//           break;
//         case masOfUserAttempts.includes(userNumber):
//           alert(`You'he alredy enter this number. You've ${attempts} ${attempts > 1 ? 'attempts' : 'attempt'}`);
//           break;
//         case +userNumber < num:
//           alert(`Bigger! You've ${--attempts} ${attempts > 1 ? 'attempts' : 'attempt'}`);
//           masOfUserAttempts.push(userNumber);
//           break;
//         case +userNumber > num:
//           alert(`Less! You've ${--attempts} ${attempts > 1 ? 'attempts' : 'attempt'}`);
//           masOfUserAttempts.push(userNumber);
//           break;
//         case +userNumber === num:
//           alert('Right!');
//       }

//       if (attempts === 0) {
//         alert('You have no more attepts left');
//         flag = false;
//       }
//     }
//   } else {
//     alert('Enter numbers!');
//   }
// }

// alert('The game is finished');

