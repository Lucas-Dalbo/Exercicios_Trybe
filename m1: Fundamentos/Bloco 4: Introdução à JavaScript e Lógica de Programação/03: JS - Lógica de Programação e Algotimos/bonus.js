const caractere = "*";
const espaco = " ";

// 1. Retângulo
function retangulo(size) {
    let linha = "";
    for (let i = 1; i <= size; i += 1) {
        linha += caractere;
    }
    for (let i = 1; i <= size; i += 1) {
        console.log(linha);
    }
};

// 2. Triângulo Retângulo
function triRet(size) {
    let linha = "";
    for (let i = 1; i <= size; i += 1) {
        linha += caractere;
        console.log(linha);
    }
};

// 6. Número Ptimo
let number = 49;
let ePrimo = true;

for ( let divisor = 2; divisor < number ; divisor += 1) {
    if ( number % divisor === 0) {
        ePrimo = false;
        break;
    }
    else {
        ePrimo = true;
    }
};

console.log(ePrimo);