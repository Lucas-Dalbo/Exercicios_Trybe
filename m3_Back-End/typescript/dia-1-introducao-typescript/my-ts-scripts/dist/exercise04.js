"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercise02_1 = __importDefault(require("./exercise02"));
const exercise03_1 = __importDefault(require("./exercise03"));
const readlineSync = require('readline-sync');
let estacoesHemisferio = {
    norte: {
        [exercise03_1.default.Outono]: [9, 10, 11, 12],
        [exercise03_1.default.Inverno]: [12, 1, 2, 3],
        [exercise03_1.default.Primavera]: [3, 4, 5, 6],
        [exercise03_1.default.Verao]: [6, 7, 8, 9],
    },
    sul: {
        [exercise03_1.default.Outono]: [3, 4, 5, 6],
        [exercise03_1.default.Inverno]: [6, 7, 8, 9],
        [exercise03_1.default.Primavera]: [9, 10, 11, 12],
        [exercise03_1.default.Verao]: [12, 1, 2, 3],
    }
};
const mesesNomes = Object.values(exercise02_1.default);
const hemisferios = Object.keys(estacoesHemisferio);
function script() {
    const choseMes = readlineSync.keyInSelect(mesesNomes, 'Escolha um mês');
    const choseHem = readlineSync.keyInSelect(hemisferios, 'Escolha um hemisfério');
    if (choseHem < 0 || choseHem < 0)
        return;
    const hemisferio = Object.values(estacoesHemisferio)[choseHem];
    const result = [];
    Object.entries(hemisferio).forEach((entries) => {
        const estacao = entries[0];
        const meses = entries[1];
        if (meses.includes(choseMes + 1))
            result.push(estacao);
    });
    console.log(`Estação(ões) do mês de ${mesesNomes[choseMes]} no hemisfério ${hemisferios[choseHem]}:`, ...result);
}
script();
