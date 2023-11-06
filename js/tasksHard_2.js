'use strict';

const income = +prompt('Введите свой доход');
let tax = 0;
let difference = 0;

if (isNaN(income)) {
  console.log('Вы ввели некорректные данные');
} else {
  if (income < 0) {
    console.log('Доход не может быть отрицательным');
  } else {
    difference = income;
  
    if (income >= 50000) {
      difference -= 50000;
      tax += difference * 0.3;
    }
  
    if (income > 15000) {
      difference = income - 15000;
      tax += 15000 * 0.13 + difference * 0.2;
    }
  
    if (income < 15000) {
      tax += income * 0.13;
    }
  
    console.log(`Сумма вашего налога составляет: ${tax}`);
  }
}
