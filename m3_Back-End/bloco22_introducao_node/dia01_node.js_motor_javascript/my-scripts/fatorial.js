const readline = require('readline-sync');

const calcFatorial = (numb) => {
  if (numb < 0) return 'Não existe fatorial para números negativos!';
  if (numb === 0) return 1;

  let result = numb;
  for (i = numb - 1; i >= 1; i -= 1 ) {
    result = result * i;
  }

  return result;
}

const fatorial = () => {
  const numero = readline.questionInt('Deseja saber o fatorial de qual número? ');
  const resultado = calcFatorial(numero);
  return console.log(`O fatorial de ${numero} é: ${resultado}`);
}

fatorial();
