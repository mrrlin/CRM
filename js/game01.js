'use strict';

const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const [totalCount, totalPrice] = allCashbox
  .reduce(([totalCount, totalPrice], [count, price]) =>
    [totalCount + count, totalPrice + price]);

const averagePriceGoods = Math.round(totalPrice / totalCount);

console.log(`Средняя цена товара: ${averagePriceGoods}`);