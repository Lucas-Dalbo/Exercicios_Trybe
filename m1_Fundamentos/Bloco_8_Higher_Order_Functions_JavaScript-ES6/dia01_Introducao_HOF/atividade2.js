const sorteio = (aposta, callback) => {
    let numSorteado = Math.floor(Math.random() * 5 + 1 );
    if (callback(numSorteado, aposta)) return `Parabéns, você ganhou!`
    return `Tente novamente`;
}

function ganhou (num1, num2) {
    if(num1 === num2) return true;
    return false;
}

console.log(sorteio(2, ganhou));