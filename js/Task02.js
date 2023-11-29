'use strict';

const generateNumber = (mas) => {
  mas.push(Math.round(Math.random() * 10) + 1);
  const sum = mas.reduce((acc, num) => acc += num, 0);

  return sum < 50 ? generateNumber(mas) : mas;
};

console.log(generateNumber([]));
