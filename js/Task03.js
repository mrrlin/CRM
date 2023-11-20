'use strict';

const generateArray = (lengthArray, n, m, parity) => {
  const mas = [];

  const min = Math.min(n, m);
  const max = Math.max(n, m);
  
  while(mas.length < lengthArray) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if (parity === 'odd' && randomNumber % 2 || parity === 'even' && !(randomNumber % 2)) {
      mas.push(randomNumber);
    }
  }

  return mas;
};

console.log(generateArray(100, -5, 11, 'even'));