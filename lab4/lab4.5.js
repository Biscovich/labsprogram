'use strict';

const sum = (...args) => args.reduce((s, n) => s + n, 0);

module.exports = { sum };
