let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Ordem Crescente
// for ( let i = 1 ; i < numbers.length ; i+=1 ) {
//     for ( let j = 0 ; j < i ; j+=1) {
//         if ( numbers[i] < numbers[j]) {
//             let position = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = position;
//         }
//     }
// }
// console.log(numbers);

// 2. Ordem Descrescente
// for ( let i = 1 ; i < numbers.length ; i+=1 ) {
//     for ( let j = 0 ; j < i ; j+=1) {
//         if ( numbers[i] > numbers[j]) {
//             let position = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = position;
//         }
//     }
// }
// console.log(numbers);

// 3. Mulplicação de Pares
let pairs = []

for ( let i = 1 ; i < numbers.length ; i+=1 ) {
    for ( let j = 0 ; j <=i ; j+=1) {
        if ( j === i - 1) {
            let mult = numbers[i] * numbers[j];
            pairs.push(mult);
        }
        else if ( j === numbers.length -1 ) {
            pairs.push(numbers[j] * 2);
        }
    }
}
console.log(pairs);