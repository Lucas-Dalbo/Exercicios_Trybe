"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = convert;
