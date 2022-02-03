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
// let maior = 0;

// for ( let element of numbers) {
//     if (maior < element) {
//         maior = element ;
//     }
// }

// console.log(maior);

// Exercício 6
// let impar = 0;

// for ( let i = 0; i < numbers.length; i+=1) {
//     if  (numbers[i] % 2 === 1) {
//         impar+=1 ;
//         }
// }
//  if ( impar != 0) {
//      console.log(impar);
//  }
//  else {
//      console.log("Nenhum valor impar encontrado");
//  }

// Exercício 7
// let menor = 0;

// for ( let i = 0; i < numbers.length; i+=1) {
//     if ( menor === 0) {
//         menor = numbers[i];
//         }
//     else if ( menor > numbers[i]) {
//         menor = numbers[i]
//     }
// }

// console.log(menor);

// Exercício 8
let myArray = []

for ( i = 1; i <= 25; i+=1) {
    myArray.push(i);
}
 console.log(myArray);