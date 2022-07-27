const fs = require('fs').promises;

const listagemPersonagens = async () => {
  const personagens = 'simpsons.json';
  try {
    const resultado = await fs.readFile(personagens, 'utf-8');
    const listaPersonagens = JSON.parse(resultado);

    listaPersonagens.forEach(({ id, name }) => {
      console.log(`${id} - ${name}`);
    });
    
  } catch (error) {
    console.log(error);
  };
};

listagemPersonagens();
