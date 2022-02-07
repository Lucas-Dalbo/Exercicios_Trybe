// Exercício 2
let word = 'tryber';
let reverse = [];

for ( let i = 0; i < word.length; i+=1) {
        reverse.unshift(word[i]);
}
console.log(reverse.join(""));

// Comando .join retirado de https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join