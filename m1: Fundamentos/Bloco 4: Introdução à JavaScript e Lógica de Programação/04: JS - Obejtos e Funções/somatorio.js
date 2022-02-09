function somatoria ( number ) {
    let somaTotal = 0;
    
    for ( let i = 1; i <= number; i += 1) {
        somaTotal += i
    }
    return somaTotal;
}
console.log(somatoria(5));