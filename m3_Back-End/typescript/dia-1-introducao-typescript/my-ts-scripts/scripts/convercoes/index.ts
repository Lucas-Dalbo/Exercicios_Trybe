const scripts = ['length'];

function executarScript(script: string) :void {
  return require(`./${script}`);
}

function selectScript() :void {
  const readline = require('readline-sync');

  const index = readline.keyInSelect(scripts, 'Selecione o programa que deseja executar: ');
  
  if(index < 0) return console.log('Aplicação encerrada');

  const programa = scripts[index];
  
  console.log(`Executando ${programa}...`);

  return executarScript(programa);
}

selectScript();