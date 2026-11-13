'use strict';

function array() {
  const items = [];
  const read = (index) => items[index];
  read.push = (value) => items.push(value);
  read.pop = () => items.pop();
  return read;
}

module.exports = { array };
