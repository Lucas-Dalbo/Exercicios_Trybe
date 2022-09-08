import  MesesAno  from "./exercise02";
import  Estacoes  from "./exercise03";
const readlineSync = require('readline-sync');

let estacoesHemisferio = {
  norte: {
    [Estacoes.Outono]: [9, 10, 11, 12],
    [Estacoes.Inverno]: [12, 1, 2, 3],
    [Estacoes.Primavera]: [3, 4, 5, 6],
    [Estacoes.Verao]: [6, 7, 8, 9],
  },
  sul: {
    [Estacoes.Outono]: [3, 4, 5, 6],
    [Estacoes.Inverno]: [6, 7, 8, 9],
    [Estacoes.Primavera]: [9, 10, 11, 12],
    [Estacoes.Verao]: [12, 1, 2, 3],
  }
}

const mesesNomes = Object.values(MesesAno);
const hemisferios = Object.keys(estacoesHemisferio);

function script (): void {
  const choseMes = readlineSync.keyInSelect(mesesNomes, 'Escolha um mês') + 1;
  const choseHem = readlineSync.keyInSelect(hemisferios, 'Escolha um hemisfério');
  const hemisferio = Object.values(estacoesHemisferio)[choseHem];

  const result: string[] = []
  Object.entries(hemisferio).forEach((entries) => {
    const estacao = entries[0];
    const meses = entries[1];

    if (meses.includes(choseMes)) result.push(estacao);
  });

  console.log(...result);
}

script();

