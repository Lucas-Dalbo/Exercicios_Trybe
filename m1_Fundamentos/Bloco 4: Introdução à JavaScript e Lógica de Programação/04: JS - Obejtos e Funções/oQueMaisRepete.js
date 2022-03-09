function contagem (array) {
    let numQuant = {};
    for ( let num of array) {
        if (numQuant["" + num] === undefined) {
            numQuant["" + num] = 1;
            }
        else {
            numQuant["" + num] = 1 + numQuant["" + num];
        }
    }
    return maisRepete (numQuant);
};

function maisRepete (objeto) {
    let valor;
    let chave = "";
    for ( let key in objeto) {
        if ( valor === undefined) {
            valor = objeto[key]
            chave = key;
        }
        else if ( valor < objeto[key]) {
            valor = objeto[key];
            chave = key;
        }
    }
    return chave;
};

let teste = [2, 3, 2, 5, 8, 3, 3]; 
console.log(contagem(teste));
