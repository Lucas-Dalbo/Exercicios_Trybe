// Exercício 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = "";

for (let i = 0; i < array.length; i += 1) {
    if (maior.length < array[i].length) {
        maior = array[i];
    }
}
console.log(maior);

let menor = "";

for (let i = 0; i < array.length; i += 1) {
    if ( menor.length === 0) {
        menor = array[i];
    }
    else if (menor.length > array[i].length) {
        menor = array[i];
    }
}

console.log(menor);