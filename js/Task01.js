'use strict';

const dollar = 73;

const convertCurrency = (price) => {
  const currentPrice = price;

  return currentPrice * 1.2 * 73;
};

const userPrice = +prompt("Введите стоимость покупки в евро");

if (isNaN(userPrice)) {
  console.log('Вы ввели некорректные данные');
} else {
  console.log(`Стоимость покупки в рублях: ${convertCurrency(userPrice)}`);
}
