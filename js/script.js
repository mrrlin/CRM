'use strict';

const productName = prompt('Введите название товара: ');
const productQuantity = +prompt('Введите количество товара: ');
const productCategory = prompt('Введите категорию товара: ');
const productPrice = +prompt('Введите цену товара: ');

let productTotalPrice = 0;

if (isNaN(productQuantity) || isNaN(productPrice)) {
  console.log('Вы ввели некорректные данные');
} else {
  productTotalPrice = productQuantity * productPrice;
  
  console.log(`
  Товар: ${productName},
  Количество: ${productQuantity} шт.,
  Категория: ${productCategory},
  Цена: ${productPrice}`);
  
  console.log(`
  Товар: ${productName} в количестве: ${productQuantity}
  шт. и общей стоимостью: ${productTotalPrice} деревянных`);
}