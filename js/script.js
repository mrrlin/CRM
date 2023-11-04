'use strict';

{
  const furnitureName = 'Valery';
  const quantity = 3;
  const category = 'Closet';
  const price = 10000;
  
  const sum = price * quantity;
  
  console.log(`Товар: ${furnitureName},
  Количество: ${quantity},
  Категория: ${category},
  Цена: ${price}`);
  
  console.log(`Товар: ${furnitureName}, общая сумма: ${sum}`);
}

{
  furnitureName = prompt('Введите название товара: ');
  quantity = parseInt(prompt('Введите количество товара: '));
  category = prompt('Введите категорию товара: ');
  price = parseInt(prompt('Введите цену товара: '));
  
  sum = userGoodPrice * userGoodQuantity;
  
  console.log(`Товар: ${furnitureName},
  Количество: ${quantity} шт.,
  Категория: ${category},
  Цена: ${price}`);
  
  console.log(`Товар: ${furnitureName} в количестве: ${quantity}
  шт. и общей стоимостью: ${price} деревянных`);
}