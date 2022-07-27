const readline = require('readline-sync');

const verificarInput = (input) => {
  if(input <=0 ) {
    console.log('Valor invalido. Insira um número inteiro positivo.');
    return false
  } else {
    return true
  }
};

const criarSequencia = (tamanho) => {
  let sequencia = [];
  for (i = 1; i <= tamanho; i += 1) {
    if(sequencia.length < 2) {
      sequencia.push(1);
    } else {
      const numb1 = sequencia[sequencia.length -1];
      const numb2 = sequencia[sequencia.length -2];
      const novoNumb = numb1 + numb2;
      sequencia.push(novoNumb);
    }
  }
  return sequencia;
};

const tamanhoSequencia = () => {
  const tamanho = readline.questionInt('Qual o tamanho da Sequência de Fibonacci deseja vizualizar? (Somente valores inteiros positivos) ');
  if(verificarInput(tamanho)) {
    const resultado = criarSequencia(tamanho);
    return console.log(resultado);
  }
};

tamanhoSequencia();
