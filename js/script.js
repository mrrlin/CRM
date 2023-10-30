'use strict';

const closet = 'Valery';
const quantity = 3;
const category = 'Furniture';
const price = 10000;

const sum = price * quantity;

console.log(`Товар: ${closet},
Количество: ${quantity},
Категория: ${category},
Цена: ${price}`);

console.log(`Товар: ${closet}, общая сумма: ${sum}`);

const userGoodName = prompt('Введите название товара: ');
const userGoodQuantity = parseInt(prompt('Введите количество товара: '));
const userGoodCategory = prompt('Введите категорию товара: ');
const userGoodPrice = parseInt(prompt('Введите цену товара: '));

const userGoodSumPrice = userGoodPrice * userGoodQuantity;

console.log(`Товар: ${userGoodName},
Количество: ${userGoodQuantity} шт.,
Категория: ${userGoodSumPrice},
Цена: ${userGoodPrice}`);

console.log(`Товар: ${userGoodName} в количестве: ${userGoodQuantity}
шт. и общей стоимостью: ${userGoodSumPrice} деревянных`);