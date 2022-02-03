let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 
// Exercício 1
// for ( let element of numbers ) {
//     console.log(element);
// }

// Exercício 2
// let soma = 0;

// for ( let i = 0; i < numbers.length; i+=1 ) {
//     soma = soma + numbers[i];
// }
// console.log(soma);

//Exercício 3 e 4
// let soma = 0;

// for ( let i = 0; i < numbers.length; i+=1 ) {
//     soma = soma + numbers[i];
// }
// let media = soma / 2;
// console.log(media);

// if ( media > 20) {
//     console.log("Valor maior que 20");
// }
// else {
//     console.log("Valor menor que 20")
// }

// Exercício 5
let maior = 0;

for ( let element of numbers) {
    if (maior < element) {
        maior = element ;
    }
}

console.log(maior);