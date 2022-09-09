"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require('readline-sync');
const tabela = {
    kl: 1000,
    hl: 100,
    dal: 10,
    l: 1,
    dl: 0.1,
    cl: 0.01,
    ml: 0.001,
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
exports.default = exec;
