'use strict';

const rain = Math.round(Math.random());

if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}

//university test
const pointsMath = +prompt('Введите кол-во баллов по математике');
const pointsRussianLaguage = +prompt('Введите кол-во баллов по русскому языку');
const pointsInformatics = +prompt('Введите кол-во баллов по информатике');

let pointsSum = 0;

if (isNaN(pointsMath) || isNaN(pointsRussianLaguage) || isNaN(pointsInformatics)) {
  console.log('Вы ввели некорректные данные');
} else {
  pointsSum = pointsMath + pointsRussianLaguage + pointsInformatics;
  console.log(`Ваша сумма баллов: ${pointsSum}`);

  if (pointsSum < 265) {
    console.log(`Вы не прошли на бюджет.`);
  } else {
    console.log(`Поздравляю, вы поступили на бюджет!`);
  }
}

//ATM
const minimumBanknoteDenomination = 100;
const moneySum = +prompt('Введите сумму для снятия');

if (isNaN(moneySum)) {
  console.log('Вы ввели некорректные данные');
} else {
  if (!(moneySum % minimumBanknoteDenomination)) {
    console.log('Заберите ваши деньги');
  } else {
    console.log('Минимальный номинал купюр, который может выдавать банкомат - 100р.');
  }
}