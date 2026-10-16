'use strict';

const square = (x) => x * x;

const cube = (x) => x ** 3;

function average(a, b) {
  return (a + b) / 2;
}

function calculate() {
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    const value = average(square(i), cube(i));
    numbers.push(value);
  }
  return numbers;
}

module.exports = { square, cube, average, calculate };
