"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require('readline-sync');
const tabela = {
    km: 1000000000,
    hm: 1000000,
    dam: 1000,
    m: 1,
    dm: 0.001,
    cm: 0.000001,
    mm: 0.000000001,
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
    console.log(`${valor}${unidadeBase}³ é igual a ${resultado}${unidadeDest}³.`);
}
exec();
exports.default = exec;
