'use strict';

const phonebook = [
  { name: 'Кирил', phone: '+380000000001' },
  { name: 'Олег', phone: '+380000000002' },
  { name: 'Анна', phone: '+380000000003' },
];

const findPhoneByName = (name) => {
  for (const user of phonebook) {
    if (user.name === name) return user.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
