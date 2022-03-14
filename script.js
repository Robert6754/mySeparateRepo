"use strict";

function createRandomNumber() {
  return Math.floor(Math.random() * 100);
}

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function game() {
  const userNumber = prompt("Угадай число от 1 до 100");
  return function repeat() {
    const randomNumber = createRandomNumber();
    if (isNumber(userNumber)) {
      if (userNumber > randomNumber) {
        console.log("Загаданное число меньше");
      } else if (userNumber < randomNumber) {
        console.log("Загаданное число больше");
      } else if (userNumber == randomNumber) {
        console.log("Поздравляю, вы угадали!!!");
      }
    } else if (userNumber === null) {
      console.log("Игра окончена");
    } else {
      console.log("Введи число!");
      repeat();
    }
  };
}
let truing = game();
truing();
