const readlineSync = require('readline-sync');

const tabela = {
  km: 1000000000,
  hm: 1000000,
  dam: 1000,
  m: 1,
  dm: 0.001,
  cm: 0.000001,
  mm: 0.000000001,
}

const unidades = Object.keys(tabela);

function convert(valor: number, base: string, converter: string): number {
  const medAtual = tabela[base as keyof typeof tabela];
  const medAlvo = tabela[converter as keyof typeof tabela];

  if(medAtual > medAlvo) {
    const chaveConvercao = medAlvo / medAtual;
    return valor / chaveConvercao;
  } else {
    const chaveConvercao = medAtual / medAlvo;
    return valor * chaveConvercao;
  };
}

function exec(): void {
  const valor = readlineSync.questionFloat('Qual valor deseja converter? ');

  const base = readlineSync.keyInSelect(unidades, 'Escolha a unidade de medida atual: ');
  if(base < 0) return console.log('Aplicação encerrada');


  const dest = readlineSync.keyInSelect(unidades, 'Escolha a unidade de medida para que deseja converter: ');
  if(dest < 0) return console.log('Aplicação encerrada');

  const unidadeBase = unidades[base];
  const unidadeDest = unidades[dest];

  const resultado = convert(valor, unidadeBase, unidadeDest);
  console.log(`${valor}${unidadeBase} é igual a ${resultado}${unidadeDest}.`);
}

exec();

export default exec;
