'use strict';

const furnitureName = prompt('Введите название товара: ');
const quantity = +prompt('Введите количество товара: ');
const category = prompt('Введите категорию товара: ');
const price = +prompt('Введите цену товара: ');

let sum = 0;

if (!parseInt(quantity) || !parseInt(price)) {
  console.log('Вы ввели некорректные данные');
} else {
  sum = quantity * price;
  
  console.log(`
  Товар: ${furnitureName},
  Количество: ${quantity} шт.,
  Категория: ${category},
  Цена: ${price}`);
  
  console.log(`
  Товар: ${furnitureName} в количестве: ${quantity}
  шт. и общей стоимостью: ${sum} деревянных`);
}