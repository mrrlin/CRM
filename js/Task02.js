'use strict';

const generateArray = (lengthArray, n, m) => {
  const mas = [];

  const min = Math.min(n, m);
  const max = Math.max(n, m);
  
  for(let i = 0; i < lengthArray; i++) {
    mas.push(Math.floor((Math.random() * (max - min + 1) + min)));
  }

  return mas;
};

console.log(generateArray(100, -11, 11));