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

// 3. Triângulo oposto
function triOps(size) {
  let posicionador = size;
  for (let i = 1; i <= size; i += 1) {
    let linha = '';
    for (let j = 1; j <= size; j += 1) {
      if (j >= posicionador) {
        linha += caractere;
      }
      else {
        linha += espaco;
      }
    }
    console.log(linha);
    posicionador -= 1;
  }
}

// 4. Pirâmide
function piramide(size) {
  let altura;
  if (size % 2 !== 0) {  
    altura = (size + 1) / 2;
  } else {
      altura = size / 2;
  }
  let posEsq = altura;
  let posDir = altura;
  for (let i = 1; i <= altura; i += 1) {
    let linha = '';
    for (let j = 1; j <= size; j += 1) {
      if (j >= posEsq && j <= posDir) {
        linha += caractere;
      } else {
        linha += espaco;
      }
    }
    console.log(linha);
    posEsq -= 1;
    posDir += 1;
  }
}

// 5. Pirâmide Vazia.
function emptPiramide(size) {
  let altura = (size +1) / 2;
  let posEsq = altura;
  let posDir = altura;
  for (let i = 1; i <= altura; i += 1) {
    let linha = '';
    for (let j = 1; j <= size; j += 1) {
      if (j !== posEsq && j !== posDir && i < altura) {
        linha += espaco;
      } else {
        linha += caractere;
      }
    }
    console.log(linha);
    posEsq -= 1;
    posDir += 1;
  }
}

// 6. Número Primo
let number = 49;
let ePrimo = true;

for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
        ePrimo = false;
    }
};

console.log(ePrimo);