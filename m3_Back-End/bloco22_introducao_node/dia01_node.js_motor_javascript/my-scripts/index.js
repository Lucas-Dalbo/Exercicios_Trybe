const readline = require('readline-sync');
const listaScripts = require('./lista_scripts');

const executarScript = (script) => {
  return require(`./${script}`);
}

const selecionarScript = () => {
  console.table(listaScripts);

  const scriptEscolhido = readline.questionInt('Qual o indice do script que deseja executar? ');
  console.log(`Executando ${scripts[scriptEscolhido]}!`);
  return executarScript(`${scripts[scriptEscolhido]}`);
}

selecionarScript();
