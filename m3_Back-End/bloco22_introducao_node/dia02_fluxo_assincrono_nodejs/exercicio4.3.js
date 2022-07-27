const fs = require('fs').promises;

const retirando10e6 = async () => {
  const personagens = 'simpsons.json';
  try {
    const resultado = await fs.readFile(personagens, 'utf-8');
    const listaPersonagens = JSON.parse(resultado);

    const busca = listaPersonagens
      .filter(({ id }) => id !== '6' && id !== '10');

    console.log(busca);
    fs.writeFile('simpsons4.3.json', JSON.stringify(busca));
  } catch (error) {
    console.log(error.msg);
  };
};

retirando10e6();