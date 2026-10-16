'use strict';

const phonebook = {
  Кирил: '+380000000001',
  Олег: '+380000000002',
  Анна: '+380000000003',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
