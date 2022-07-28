const fs = require('fs').promises;

const writeFile = async (nome, conteudo) => {
  try {
    await fs.writeFile(`${nome}.txt`, conteudo);
    return 'ok';
  } catch (error) {
    return 'Um erro ocorreu na criação do arquivo'
  }
};

writeFile('pene', 'um bom pene é italiano');

module.exports = { writeFile };
