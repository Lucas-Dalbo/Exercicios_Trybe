const readline = require('readline-sync');
const listaScripts = require('./lista_scripts');

const executarScript = (script) => {
  return require(`./${script}`);
}

const selecionarScript = () => {
  console.table(listaScripts);

  const scriptEscolhido = readline.questionInt('Qual o index do script que deseja executar? ');
  console.log(`Executando ${listaScripts[scriptEscolhido]}:`);
  return executarScript(`${listaScripts[scriptEscolhido]}`);
}

selecionarScript();
