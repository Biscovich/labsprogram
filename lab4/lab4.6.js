'use strict';

function max(matrix) {
  let largestNumber = -Infinity;
  for (const row of matrix) {
    for (const number of row) {
      if (number > largestNumber) {
        largestNumber = number;
      }
    }
  }
  return largestNumber;
}

module.exports = { max };
