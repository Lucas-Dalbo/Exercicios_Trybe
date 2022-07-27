const axios = require('axios').default;
const fs = require('fs').promises;

const fetchInfo = async () => {
  try {
    const result = await axios.get('https://assets.app.betrybe.com/back-end/nodejs/async-flow/simpsons-94f8eb570f2ea830462ee2375ded177b.json');
    return result.data;
  } catch (error) {
    await fs.writeFile('error.txt', error)
    console.log(error);
  }
};

const listagemPersonagens = async () => {
  try {
    const personagens = await fetchInfo();
    personagens.forEach(({ id, name }) => {
     console.log(`${id} - ${name}`);
    });
  } catch (error) {
    console.log(error);
  };
};

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
