// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...numbers) => numbers.reduce((result, crr) => result + crr);

console.log(sum(1,3,-7,5,4));
