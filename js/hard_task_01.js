'use strict';

const calculateGreatestCommonDivisor = (firstNumber, secondNumber) => {
  const currentFirstNumber = firstNumber;
  const currentSecondNumber = secondNumber;

  if (currentSecondNumber > currentFirstNumber) 
    return calculateGreatestCommonDivisor(secondNumber, firstNumber);

  if (!currentSecondNumber)
    return currentFirstNumber;

  return calculateGreatestCommonDivisor(currentSecondNumber, currentFirstNumber % currentSecondNumber);
};

const userFirstNumber = +prompt("Введите первое число");
const userSecondNumber = +prompt("Введите второе число");

if (isNaN(userFirstNumber) || isNaN(userSecondNumber)) {
  console.log('Вы ввели некорректные данные');
} else {
  console.log('Наибольший общий делитель чисел ' + userFirstNumber + ' и 15' +
    userSecondNumber + ': ' + calculateGreatestCommonDivisor(userFirstNumber, userSecondNumber)
  );
}