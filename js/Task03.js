'use strict';

const addPrefix = (mas, prefix) => {
  let currentMas = [...mas];

  return currentMas.map(item => `${prefix} ${item}`);
}

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names, 'Mr'));