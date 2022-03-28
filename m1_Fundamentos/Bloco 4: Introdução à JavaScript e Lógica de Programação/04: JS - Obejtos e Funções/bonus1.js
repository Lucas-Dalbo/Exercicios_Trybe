const romamNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

// 1- Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function indoArabicNumber (string) {
  try {
    const algarisms = string.split('');
    let numbers = 0;
    for (let id = 0; id < algarisms.length; id += 1) {
      const element = algarisms[id];
      const number = romamNumbers[element];
      if (number === undefined) throw 'Insira algarismos válidos!';
      if(number < romamNumbers[algarisms[id +1]]) {
        numbers += number * (-1);
      } else {
        numbers += number;
      }
    }
    if (numbers <= 0) throw 'Insira algarismos válidos!';
    return numbers;
  } catch(error) {
    return error;
  }
}

// Fazendo com HOFs de array:
const newNubers = (string) => {
  const algarisms = string.split('');
  try {
    const number = algarisms.map((map, id) => {
      const element = romamNumbers[map];
      if (element === undefined) throw 'Insira algarismos válidos!';
      const nextElement = romamNumbers[algarisms[id + 1]];
      if(element < nextElement && nextElement !== undefined) {
        return element * (-1);
      } else {
        return element;
      }
    }).reduce((acc, crr) => acc + crr, 0);
    if (number <= 0) throw 'Insira algarismos válidos!';
    return number;
  }catch(error) {
    return error;
  }
}

console.log(indoArabicNumber('MCMXCIV'));
console.log(newNubers('MCMXCIV'));
