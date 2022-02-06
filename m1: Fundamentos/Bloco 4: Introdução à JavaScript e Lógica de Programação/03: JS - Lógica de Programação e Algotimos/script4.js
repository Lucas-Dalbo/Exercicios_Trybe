let num = 50;
let maiorPrimo;

for ( let i = 2; i <= num; i += 1) {
    let ePrimo = true;
    for ( let j = 2; j < i; j += 1) {
        if ( i % j === 0) {
            ePrimo = false;
        }
    }
    if (ePrimo) {
        maiorPrimo = i;
    }
}
console.log(maiorPrimo);

// Conluido após observar o gabarito sem explicação, apenas o código.

// Minha explicação: 
// Primeiro é utilizamos um loop para passar pela lista de números (i), assumindo que todos eles são primos (true); 
// Em seguida, usamos outro loop de númeors (j), que irá dividir sucessivamente os números do loop anterior;
// Caso o resto de alguma divisão seja igual a 0, o dividendo (i) não é primo (false);
// Após o termino das divisões, caso o dividendo (i) ainda seja primo (true), ele se torna o maior número primo da lista, se não for primo (false), nada acontece.
