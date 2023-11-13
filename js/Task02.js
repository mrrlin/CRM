'use strict';

const isPrime = (userNumber) => {
  const currentuserNumber = userNumber;

  if (currentuserNumber > 1) {
    for (let i = 2; i < currentuserNumber; i++) {
      if (currentuserNumber % i === 0) {
        return "Составное число";
      }
    }
    return "Простое число";
  } else {
    return "Число должно быть больше 1";
  }
  
};

const userNumber = prompt('Введите число');

if (isNaN(userNumber)) {
  console.log('Вы ввели некорректные данные');
} else {
  console.log(isPrime(userNumber));
}