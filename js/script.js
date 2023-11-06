'use strict';

{
  const productName = 'Valery';
  const productQuantity = 3;
  const productCategory = 'Closet';
  const productPrice = 10000;
  
  const productTotalPrice = productPrice * productQuantity;
  
  console.log(`Товар: ${productName},
  Количество: ${productQuantity},
  Категория: ${productCategory},
  Цена: ${productPrice}`);
  
  console.log(`Товар: ${productName}, общая сумма: ${productTotalPrice}`);
}

{
  const productName = prompt('Введите название товара: ');
  const productQuantity = parseInt(prompt('Введите количество товара: '));
  const productCategory = prompt('Введите категорию товара: ');
  const productPrice = parseInt(prompt('Введите цену товара: '));
  
  const productTotalPrice = productQuantity * productPrice;
  
  console.log(`Товар: ${productName},
  Количество: ${productQuantity} шт.,
  Категория: ${productCategory},
  Цена: ${productPrice}`);
  
  console.log(`Товар: ${productName} в количестве: ${productQuantity}
  шт. и общей стоимостью: ${productTotalPrice} деревянных`);
}