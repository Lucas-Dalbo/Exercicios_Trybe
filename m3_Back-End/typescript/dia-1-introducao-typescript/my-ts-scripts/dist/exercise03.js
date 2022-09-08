"use strict";
var Estacoes;
(function (Estacoes) {
    Estacoes[Estacoes["Outono"] = 1] = "Outono";
    Estacoes[Estacoes["Inverno"] = 2] = "Inverno";
    Estacoes[Estacoes["Primavera"] = 3] = "Primavera";
    Estacoes[Estacoes["Ver\u00E3o"] = 4] = "Ver\u00E3o";
})(Estacoes || (Estacoes = {}));
console.log(Estacoes[1], Estacoes['Outono']);
console.log(Estacoes[2], Estacoes['Inverno']);
console.log(Estacoes[3], Estacoes['Primavera']);
console.log(Estacoes[4], Estacoes['Verão']);
