"use strict";

let closure = function (x) {
  let d = function () {
    const a = +prompt("Угадайте число от 1 до 100");

    if (a < x) {
      +prompt("Загаданное число меньше");
    } else if (a > x) {
      +prompt("Загаданное число больше");
    } else if (a === NaN) {
      +prompt("Введите число!");
    } else if (a === x) {
      +prompt("Поздравляю! Вы угадали!");
    }

    return x + a;
  };
};

closure(10);
