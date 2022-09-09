"use strict";
const scripts = ['length'];
function executarScript(script) {
    return require(`./${script}`);
}
function selectScript() {
    const readline = require('readline-sync');
    const index = readline.keyInSelect(scripts, 'Selecione o programa que deseja executar: ');
    const programa = scripts[index];
    console.log(`Executando ${programa}...`);
    return executarScript(programa);
}
selectScript();
