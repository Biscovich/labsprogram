'use strict';

const ipToInt = (ip = '127.0.0.1') =>
  ip.split('.').reduce((result, byte) => (result << 8) | Number(byte), 0);

module.exports = { ipToInt };
