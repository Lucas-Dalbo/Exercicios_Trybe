let salario = 3500;

console.log("Salário Bruto: " + salario)

if ( salario <= 1556.94 ) {
    const aliquota8 = salario*0.08;
    salario = salario-aliquota8;
    console.log ("Aliquota de 8%: " + aliquota8);
}
else if ( salario > 1556.94 && salario <= 2594.92 ) {
    const aliquota9 = salario*0.09;
    salario = salario-aliquota9;
    console.log ("Aliquota de 9%: " + aliquota9);
}
else if ( salario > 2594.92 && salario <= 5189.82 ) {
    const aliquota11 = salario*0.11;
    salario = salario-aliquota11;
    console.log ("Aliquota de 11%: " + aliquota11);
}
else if ( salario > 5189.82 ) {
    const aliquotaMax = 570.88;
    salario = salario-aliquotaMax;
    console.log ("Aliquota de máxima: " + aliquotaMax);
}

if ( salario <= 1903.98 ) {
    console.log("Isento de Imposto de Renda");
}
else if ( salario > 1903.98 && salario <= 2826.65 ) {
    const imposto7 = (salario*0.075) - 142.80;
    salario = salario - imposto7;
    console.log("Imposto de Renda: " + imposto7);
}
else if ( salario > 2826.65 && salario <= 3751.05 ) {
    const imposto15 = (salario*0.15) - 354.80;
    salario = salario - imposto15;
    console.log("Imposto de Renda: " + imposto15);
}
else if ( salario > 3751.05 && salario <= 4664.68 ) {
    const imposto22 = (salario*0.225) - 636.13;
    salario = salario - imposto22;
    console.log("Imposto de Renda: " + imposto22);
}
else if ( salario > 4664.68 ) {
    const impostoMax = (salario*0.275) - 869.36;
    salario = salario - impostoMax;
    console.log("Imposto de Renda: " + impostoMax);
}

console.log("Salário Liquido: " + salario);
