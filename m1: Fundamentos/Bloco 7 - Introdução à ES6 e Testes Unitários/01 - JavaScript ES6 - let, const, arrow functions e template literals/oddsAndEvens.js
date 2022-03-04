const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const ordem = (array) => array.sort(function(a, b){return a - b});

console.log(`Os números ${ordem(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉 (OK!)

// Função de comparação (function(a, b){return a - b}) pesquisada em:
//https://www.w3schools.com/js/js_array_sort.asp