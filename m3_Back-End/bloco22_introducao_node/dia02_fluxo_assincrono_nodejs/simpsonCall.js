const fs = require('fs').promises;

const callSimpsons = async (arquivo) => {
  const personagens = arquivo;
  const resultado = await fs.readFile(personagens, 'utf-8');
  const listaPersonagens = JSON.parse(resultado);
  return listaPersonagens;
}

module.exports = callSimpsons;