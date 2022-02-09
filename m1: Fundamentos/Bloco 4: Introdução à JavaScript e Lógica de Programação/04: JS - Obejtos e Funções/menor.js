function menorIndice (array) {
    let menor;
    for ( let a = 0; a < array.length ; a += 1) {
        if (menor === undefined) {
            menor = array[a]
        }
        else if ( array[a] < menor) {
            menor = a
        };
    };
    return menor
};

let teste = [2, 4, 6, 7, 10, 0, -3];
console.log(menorIndice(teste));