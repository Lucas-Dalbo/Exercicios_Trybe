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

// Erro 1:
somaMultiplica(13, 'a', 2)
  .then(resultado => console.log('Sucesso: ' , resultado))
  .catch(e => console.log('Erro: ' , e.message));

// Erro 2:
somaMultiplica(13, 10, 2)
  .then(resultado => console.log('Sucesso: ' , resultado))
  .catch(e => console.log('Erro: ' , e.message));

// Sucesso:
somaMultiplica(13, 20, 2)
  .then(resultado => console.log('Sucesso: ' , resultado))
  .catch(e => console.log('Erro: ' , e.message));
