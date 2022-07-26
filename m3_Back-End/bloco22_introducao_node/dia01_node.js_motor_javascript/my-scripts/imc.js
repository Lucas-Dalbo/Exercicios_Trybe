const readline = require('readline-sync');

const calculoIMC = (peso, altura) => (peso / Math.pow(altura, 2)).toFixed(2);

function main () {
  const altura = readline.questionFloat('Qual a sua altura em metros? ');
  const peso = readline.questionFloat('Qual o seu peso em Kg? ');

  const resultado = calculoIMC(peso, altura);
  console.log(resultado);
}

main();
