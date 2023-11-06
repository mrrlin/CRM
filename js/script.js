'use strict';

const productName = 'Valery';
const productQuantity = 3;
const productCategory = 'Closet';
const productPrice = 10000;

const productTotalPrice = productPrice * productQuantity;

console.log(`Товар: ${productName},
количество: ${productQuantity},
категория: ${productCategory},
цена: ${productPrice}`);

console.log(`Товар: ${productName}, общая сумма: ${productTotalPrice}`);