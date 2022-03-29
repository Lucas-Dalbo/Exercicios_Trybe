const num = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
}

function encode(string) {
  let word = string.split([""]);
  const resultado = word.map((map) => {
    if(num[map] !== undefined) return num[map];
    return map;
  });
  let encodado = resultado.join("");
  return encodado;
}

function decode(string) {
  let word = string.split([""]);
  for ( let letter in word) {
    for ( let key in num) {
      if ( word[letter] === num[key]) {
        word[letter] = key;
      }
    }
  }
  let decodado = word.join("");
  return decodado;
}

module.exports = { encode, decode };
