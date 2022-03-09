// 1. Crie uma função que receba um número e retorne seu fatorial.
const fatorial = (num) => {
    let fator = 1;
    for ( let i = num ; i > 1 ; i -= 1) {
        fator *= i;
    }
    return fator;
}

console.log(fatorial(4));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.
const maiorPalavra = string => {
    let array = string.split(' ');
    array.sort((a, b) => b.length - a.length);
    console.log(array[0]);
}

maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu');

// 3. 
const botao = document.querySelector('#button');
const cliques = document.createElement('p');
document.querySelector('main').appendChild(cliques);
let clickCount = 0;

botao.addEventListener('click', () => {
    clickCount += 1;
    clickCount === 1 ? cliques.innerText = `O botão foi apertado ${clickCount} vez` : cliques.innerText = `O botão foi apertado ${clickCount} vezes`; 
});

// 4. 
const skills = ['HTML', 'CSS', 'JavaScript', 'ES6', 'DOM'];

const juncao = txt1 => `${txt1} Minhas cinco principais habilidades são:
${skills.sort()}
#goTrybe`;

const chamada = string => {
    let txtPadrao = 'Tryber x aqui!';
    let chmPessoa = txtPadrao.replace('x', string);
    return juncao (chmPessoa);
}

console.log(chamada('Jãozin'));