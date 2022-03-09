function maiorNome (array) {
    let maior = "";
    for ( let nome in array) {
        if ( array[nome].length > maior.length) {
            maior = array[nome];
        };
    };
    return maior;
};

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorNome(teste));