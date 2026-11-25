'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
};

const removeElements = (array, ...items) => {
  items.forEach((item) => {
    removeElement(array, item);
  });
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
removeElements(numbers, 5, 1, 6);
console.log(numbers);
// [2, 3, 4, 7]

const cities = ['Kyiv', 'Beijing', 'Lima', 'Lviv'];
removeElements(cities, 'Lima', 'Berlin', 'Kyiv');
console.log(cities);
// ['Beijing', 'Lviv']
