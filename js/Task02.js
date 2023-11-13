'use strict';

const getAverageValue = (mas) => {
  const currentMas = mas;
  let averageValue = 0;

  for (let i = 0; i < currentMas.length; i++) {
    averageValue += currentMas[i];
  }

  return Math.floor(averageValue / currentMas.length);
};

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

console.log(getAverageValue(allCashbox));