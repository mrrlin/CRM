'use strict';

const getLeapYears = (n, m) => {
  const mas = [];

  const min = Math.min(n, m);
  const max = Math.max(n, m);

  for(let year = min; year < max; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      mas.push(year);
    }
  }

  return mas;
};

console.log(getLeapYears(1920, 2024));