const fs = require('fs').promises;

const infoPersonagem = async (parametroId) => {
  const personagens = 'simpsons.json';
  try {
    const resultado = await fs.readFile(personagens, 'utf-8');
    const listaPersonagens = JSON.parse(resultado);

    const busca = listaPersonagens.filter(({ id }) => Number(id) === parametroId);
    if(busca.length === 0) throw {msg: 'id não encontrado', code: 000}

    return console.log(busca);

  } catch (error) {
    console.log(error.msg);
  };
};

infoPersonagem(6); // [ { id: '6', name: 'Ned Flanders' } ]
infoPersonagem(25); // id não encontrado
