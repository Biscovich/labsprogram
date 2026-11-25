'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
removeElement(numbers, 5);
console.log(numbers);
// [1, 2, 3, 4, 6, 7]

const cities = ['Kyiv', 'Beijing', 'Lima', 'Lviv'];
removeElement(cities, 'Lima');
removeElement(cities, 'Berlin');
console.log(cities);
// ['Kyiv', 'Beijing', 'Lviv']
