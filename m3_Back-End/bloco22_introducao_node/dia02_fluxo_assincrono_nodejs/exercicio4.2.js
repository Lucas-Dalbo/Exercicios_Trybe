const callSimpsons = require('./simpsonCall');

const infoPersonagem = async (parametroId) => {
  try {
    const personagens = await callSimpsons();
    const busca = personagens.filter(({ id }) => Number(id) === parametroId);
    if(busca.length === 0) throw {msg: 'id não encontrado', code: 000}

    return console.log(busca);

  } catch (error) {
    console.log(error.msg);
  };
};

infoPersonagem(6); // [ { id: '6', name: 'Ned Flanders' } ]
infoPersonagem(25); // id não encontrado
