'use strict';

const seq = (f) => (next) =>
  typeof next === 'number' ? f(next) : seq((x) => f(next(x)));;

module.exports = { seq };
