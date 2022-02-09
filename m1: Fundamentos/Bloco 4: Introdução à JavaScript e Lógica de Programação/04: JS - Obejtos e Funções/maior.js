function maiorIndice (array) {
    let maior = 0;
    for ( let a = 0; a < array.length ; a += 1) {
        if ( array[a] > maior) {
            maior = a
        };
    };
    return maior
};
let teste =  [2, 3, 6, 7, 10, 1];
console.log(maiorIndice(teste));
