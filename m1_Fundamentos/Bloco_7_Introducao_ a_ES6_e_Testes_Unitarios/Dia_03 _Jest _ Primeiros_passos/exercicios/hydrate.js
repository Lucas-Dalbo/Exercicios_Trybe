// Só funciona quando o número de bebidas é menor que 10.
// const hydrate = (bebidas) => {
//   const resultado = bebidas.replace(/[^\d]/g, '')
//     .split('')
//     .reduce((acc, crr) => acc + Number(crr), 0);
//   if (resultado === 1) return '1 copo de água';
//   return `${resultado} copos de água`;
// }


// Funciona para qualquer quantidade.
// documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
function hydrate(string) {
  const id = (/\d+/g);
  let num;
  let sum = 0;
  while ((num = id.exec(string)) !== null) {
    sum += Number(num);
  }
  if ( sum === 1 ) return "1 copo de água";
  return `${sum} copos de água`;
}

console.log(hydrate('10 cervejas, 2 tequilas'));

module.exports = hydrate;
