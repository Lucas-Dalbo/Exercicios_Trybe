// 1. Crie uma função que receba um número e retorne seu fatorial.
const fatorial = (num) => {
    let fator = 1;
    for ( let i = num ; i > 1 ; i -= 1) {
        fator *= i;
    }
    return fator;
}

console.log(fatorial(4));