const readline = require('readline-sync');
const tabela = require('./tabela_imc');

const calculoIMC = (peso, altura) => (peso / Math.pow(altura, 2)).toFixed(2);

const retorno = (imc) => {
  if (imc < 18.5) return tabela.caso1[1];
  if (18.5 <= imc && imc <= 24.9 ) return tabela.caso2[1];
  if (25 <= imc && imc <= 29.9 ) return tabela.caso3[1];
  if (30 <= imc && imc <= 34.9 ) return tabela.caso4[1];
  if (35 <= imc && imc <= 39.9 ) return tabela.caso5[1];
  if (40 <= imc) return tabela.caso6[1];
}

const exibirTabela = (key) => {
  if (key === 's') console.table(tabela);
}

function main () {
  const altura = readline.questionFloat('Qual a sua altura em metros? ');
  const peso = readline.questionFloat('Qual o seu peso em Kg? ');

  const resultado = calculoIMC(peso, altura);
  const diagnostico = retorno(resultado);
  console.log(`Seu IMC é ${resultado} e seu resultado é: ${diagnostico}`);

  const exibirTabelaKey = readline.question('Deseja ver a tabela IMC? (s/n) ');
  exibirTabela(exibirTabelaKey);
}

main();

module.exports = main;
