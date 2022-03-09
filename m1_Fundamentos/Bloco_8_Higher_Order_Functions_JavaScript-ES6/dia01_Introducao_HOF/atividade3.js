// 3 - Crie uma HOF que receberá três parâmetros.
// O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante.
// Ao final a HOF deve retornar o total da contagem de respostas certas.

const nota = (gabarito, folhaResposta, callback) => {
    let finalGrade = callback(gabarito, folhaResposta);
    return finalGrade;
}

const respostas = (folhaA, folhaB) => {
    let nota = 0;
    for (let id in folhaB) {
        if (folhaB[id] === 'N.A') {
            nota = nota;
        } else {
            folhaB[id] === folhaA[id] ? nota += 1 : nota -= 0.5;
        }
    }
    return nota;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(nota(RIGHT_ANSWERS, STUDENT_ANSWERS, respostas));