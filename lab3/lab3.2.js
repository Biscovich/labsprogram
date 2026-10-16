'use strict';

const generateKey = (length, possible) => {
  let key = '';
  const size = possible.length;
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * size);
    key += possible[index];
  }
  return key;
};

module.exports = { generateKey };
