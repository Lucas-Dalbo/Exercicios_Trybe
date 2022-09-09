"use strict";
const readlineSync = require('readline-sync');
const tabela = {
    km: 1000,
    hm: 100,
    dam: 10,
    m: 1,
    dm: 0.1,
    cm: 0.01,
    mm: 0.001,
};
const unidades = Object.keys(tabela);
function convert(valor, base, converter) {
    const medAtual = tabela[base];
    const medAlvo = tabela[converter];
    if (medAtual > medAlvo) {
        const chaveConvercao = medAlvo / medAtual;
        return valor / chaveConvercao;
    }
    else {
        const chaveConvercao = medAtual / medAlvo;
        return valor * chaveConvercao;
    }
    ;
}
function exec() {
    const valor = readlineSync.questionFloat('Qual valor deseja converter? ');
    const base = readlineSync.keyInSelect(unidades, 'Escolha a unidade de medida atual: ');
    if (base < 0)
        return console.log('Aplicação encerrada');
    const dest = readlineSync.keyInSelect(unidades, 'Escolha a unidade de medida para que deseja converter: ');
    if (dest < 0)
        return console.log('Aplicação encerrada');
    const unidadeBase = unidades[base];
    const unidadeDest = unidades[dest];
    const resultado = convert(valor, unidadeBase, unidadeDest);
    console.log(`${valor}${unidadeBase} é igual a ${resultado}${unidadeDest}.`);
}
exec();
//https://stackoverflow.com/questions/50417254/dynamically-access-enum-in-typescript-by-key
