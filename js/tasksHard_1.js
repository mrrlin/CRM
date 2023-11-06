'use strict';

const salary = +prompt('Введите свой доход');
let tax = 0;

if (isNaN(salary)) {
  console.log('Вы ввели некорректные данные');
} else {
  switch(!!salary) {
    case (salary >= 50000):
      tax = salary * 0.3;
      break;
    case (salary < 50000):
      tax = salary * 0.2;
      break;
    case (salary < 15000):
      tax = salary * 0.15;
    default:
      console.log('Доход не может быть отрицательным');
  }
  console.log(`Сумма вашего налога составляет: ${tax}`);
}