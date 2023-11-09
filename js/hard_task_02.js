const findTheLowestNumber = (firstNumber, secondNumber) => {
  const currentFirstNumber = firstNumber;
  const currentSecondNumber = secondNumber;

  return (currentFirstNumber > currentSecondNumber) *  currentSecondNumber +
    (currentFirstNumber < currentSecondNumber) * currentFirstNumber;
};

const userFirstNumber = +prompt("Введите первое число");
const userSecondNumber = +prompt("Введите второе число");

if (isNaN(userFirstNumber) || isNaN(userSecondNumber)) {
  console.log('Вы ввели некорректные данные');
} else {
  console.log(`Наименьшее число: ${findTheLowestNumber(userFirstNumber, userSecondNumber)}`);
}