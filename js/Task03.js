'use strict';

const calculate = (totalAmount, goodsCount, promoCode) => {
  let currentTotalAmount = totalAmount;
  const currentGoodsCount = goodsCount;
  const currentPromocode = promoCode;

  console.log(`First: ${currentTotalAmount}`);


  if (currentGoodsCount > 10) {
    currentTotalAmount -= currentTotalAmount * 0.03;
  }

  if (currentTotalAmount > 30000) {
    currentTotalAmount -= (currentTotalAmount - 30000) * 0.15;
  }

  if (currentPromocode === 'METHED') {
    currentTotalAmount -= currentTotalAmount * 0.1;
  }
  
  if (currentPromocode === 'G3H2Z1' && currentTotalAmount > 2000) {
    currentTotalAmount -= 500;
  }

  return currentTotalAmount.toFixed(2);
};

const userTotalAmount = +prompt('Введите общую сумму корзины');
const usergoodsCount = +prompt('Введите количество товаров в корзине');
const userpromoCode = prompt('Введите промокод');

if (isNaN(userTotalAmount) || isNaN(usergoodsCount)) {
  console.log('Вы ввели некорректные данные');
} else {
  console.log(`Стоимость корзины товаров после применения всех акций и скидок: ${calculate(userTotalAmount, usergoodsCount, userpromoCode)}`);
}