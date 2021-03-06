// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// escreva greet abaixo
function greet(name, greeting = 'Hi') {
  return `${greeting} ${name}`;
};

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'
