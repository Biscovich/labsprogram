'use strict';

function fn() {
  const first = { name: 'Кирил' };
  let second = { name: 'Олег' };

  first.name = 'Максим';
  second.name = 'Анна';

  second = { name: 'Іван' };
  console.dir({ first, second });
}

module.exports = { fn };
