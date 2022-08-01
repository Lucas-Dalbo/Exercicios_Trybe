const fs = require('fs').promises;

const readFiles = async (arquivo) => {
  try {
    const file = await fs.readFile(arquivo, 'utf-8');
    console.log(file);
  } catch (error) {
    console.log('Arquivo inexistente');
  }
};

readFiles('quaquercoisa.txt'); // erro
readFiles('fileAll.txt'); // sucesso
