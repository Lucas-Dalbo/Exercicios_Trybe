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