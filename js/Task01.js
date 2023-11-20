'use strict';

const generateArray = (lengthArray) => {
  const mas = [];
  
  for(let i = 0; i < lengthArray; i++) {
    mas.push(Math.floor((Math.random() * 100), 0));
  }

  return mas;
};

console.log(generateArray(10));