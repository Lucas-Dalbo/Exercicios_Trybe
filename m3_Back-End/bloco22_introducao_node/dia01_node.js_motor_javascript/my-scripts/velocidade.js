const readline = require('readline-sync');

function velocidadeMedia(distancia, tempo) {
  return (distancia / tempo);
}

function mainFunction() {
  const distancia = readline.questionInt('Qual a distância percorrida em metros? ');
  const tempo = readline.questionInt('Quanto tempo de viagem em segundos? ');

  const resultado = velocidadeMedia(distancia, tempo);
  return console.log(`Velocidade média de ${resultado} m/s`);
}

mainFunction();
