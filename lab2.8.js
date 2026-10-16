'use strict';

function createUser(name, city) {
  const user = { name, city };
  return user;
}

module.exports = { createUser };
