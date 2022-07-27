const callSimpsons = require('./simpsonCall');

const listagemPersonagens = async () => {
  const personagens = await callSimpsons();

  personagens.forEach(({ id, name }) => {
    console.log(`${id} - ${name}`);
  });
};

listagemPersonagens();
