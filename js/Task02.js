'use strict';

const stringModify = (userString) => {
  const currentUserString = userString;

  if (!currentUserString) return currentUserString;

  return currentUserString[0].toUpperCase() + currentUserString.slice(1).toLowerCase();
};

const userString = prompt('Введите строку');

console.log(`Преобразованная строка: ${stringModify(userString)}`);