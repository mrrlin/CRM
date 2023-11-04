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
  const furnitureName = prompt('Введите название товара: ');
  const quantity = parseInt(prompt('Введите количество товара: '));
  const category = prompt('Введите категорию товара: ');
  const price = parseInt(prompt('Введите цену товара: '));
  
  const sum = quantity * price;
  
  console.log(`Товар: ${furnitureName},
  Количество: ${quantity} шт.,
  Категория: ${category},
  Цена: ${price}`);
  
  console.log(`Товар: ${furnitureName} в количестве: ${quantity}
  шт. и общей стоимостью: ${price} деревянных`);
}