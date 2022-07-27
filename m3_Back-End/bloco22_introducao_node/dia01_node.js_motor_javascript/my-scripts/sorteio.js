const readline = require('readline-sync');
const gerador01a10 = require('./numeroAleatorio');

const verificaNumero = (numSort, numUser) => {
  if(numUser > 10 || numSort < 1) return 'Esse número não faz parte do sorteio!';
  if(numSort === numUser) return 'Parabéns! Você acertou!';
  if(numSort !== numUser) return `Não foi dessa vez... O número era ${numSort}!`;
}
const jogarNovamente = () => {
  const desejaRejogar = readline.question('Quer tentar de novo? (s/n) ');
  if(desejaRejogar === 's') return sorteio();
  if(desejaRejogar === 'n') return console.log('Obrigado por jogar!'); 
}

const sorteio = () => {
  const numeroSorteado = gerador01a10();
  const numeroUsuario = readline.questionInt('Escolha um número de 1 a 10! ');
  const resultado = verificaNumero(numeroSorteado, numeroUsuario);
  console.log(resultado);
  return jogarNovamente();
}

sorteio();

module.exports = sorteio;