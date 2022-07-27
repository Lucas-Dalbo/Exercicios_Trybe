const fs = require('fs').promises;

const infoPersonagem = async (parametroId) => {
  try {
    const personagens = await fetchInfo();
    const busca = personagens.filter(({ id }) => Number(id) === parametroId);
    if(busca.length === 0) throw {msg: 'id não encontrado', code: 000}
    return console.log(busca);
  } catch (error) {
    console.log(error.msg);
  };
};
