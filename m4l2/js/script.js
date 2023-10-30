'use strict';

const closet = 'Valery';
const quantity = 3;
const category = 'Furniture';
const price = 10000;

const sum = price * quantity;

console.log(`name: ${closet} sum: ${sum}`);

const userGoodName = prompt('Введите название товара: ');
const userGoodQuantity = parseInt(prompt('Введите количество товара: '));
const userGoodCategory = prompt('Введите категорию товара: ');
const userGoodPrice = parseInt(prompt('Введите цену товара: '));

const userGoodSumPrice = userGoodPrice * userGoodQuantity;

console.log(`Товар: ${userGoodName} в количестве: ${userGoodQuantity}
  шт. и общей стоимостью: ${userGoodSumPrice} деревянных`);