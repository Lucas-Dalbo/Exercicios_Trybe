function somaMultiplica (numb1, numb2, numb3) {
  return new Promise((resolve, reject) => {
    if (
      typeof numb1 !== 'number'
      || typeof numb2 !== 'number'
      || typeof numb3 !== 'number'
      ) {
        return reject(new Error ('Informe apenas números'))
      };
    const resultado = ((numb1 + numb2) * numb3);
    if (resultado < 50 ) return reject(new Error('Valor muito baixo'));
    return resolve(resultado);
  });
}

module.exports = somaMultiplica;
