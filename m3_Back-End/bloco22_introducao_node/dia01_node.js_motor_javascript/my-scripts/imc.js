const calculoIMC = (peso, altura) => (peso / Math.pow(altura, 2)).toFixed(2);

function main () {
  const resultado = calculoIMC(83, 1.7);
  console.log(resultado);
}

main();
