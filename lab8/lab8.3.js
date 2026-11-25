'use strict';

const contract = (fn, ...types) => {
  const outputType = types.pop().name.toLowerCase();
  const inputTypes = types.map((type) => type.name.toLowerCase());

  return function (...values) {
    const valid = values.length === inputTypes.length &&
      inputTypes.every((type, index) => typeof values[index] === type);

    if (!valid) throw new TypeError('Invalid function arguments');

    const output = fn.apply(this, values);
    if (typeof output !== outputType) {
      throw new TypeError('Invalid function result');
    }
    return output;
  };
};
const sum = contract((a, b) => a + b, Number, Number, Number);
console.log(sum(2, 3));
const join = contract((a, b) => a + b, String, String, String);
console.log(join('Hello ', 'world!'));

