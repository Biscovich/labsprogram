'use strict';

function pipe(...fns) {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('Expected a function');
    }
  }
  return (value) => fns.reduce((result, fn) => fn(result), value);
}

module.exports = { pipe };
