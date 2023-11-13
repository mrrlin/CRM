'use strict';

const reverseString = (userString) => {
  let currentUserString = userString;
  let resultString = '';

  for (let i = 0; i < currentUserString.length; i++) {
    resultString += currentUserString[(currentUserString.length - 1) - i];
  }

  return resultString;
}

const userString = prompt('Введите строку');

console.log(`${userString} => ${reverseString(userString)}`);