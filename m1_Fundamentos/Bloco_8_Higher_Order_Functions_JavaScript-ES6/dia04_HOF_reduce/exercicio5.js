// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(arr) {
  let resultado = arr
    .reduce((letraA, crr) => `${letraA} ${crr}`)
    .replace(/[^a]/gi, '').length;
  return resultado;
}

console.log(containsA(names));
