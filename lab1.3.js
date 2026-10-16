'use strict';

const values = [
  true, 'cat', 4, 18, -7, false,
  'book', 0, 2.5, true, 'JS', -12,
];

let counts = {
  number: 0,
  string: 0,
  boolean: 0,
};

for (const item of values) {
  const type = typeof item;
  counts[type] += 1;
}

console.dir(counts);

counts = {};

for (const item of values) {
  const type = typeof item;

  if (counts[type] === undefined) {
    counts[type] = 0;
  }

  counts[type] += 1;
}

console.dir(counts);
