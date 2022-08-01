const fs = require('fs').promises;

const arrayDeUso = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const escrever = (array) => {
  array.forEach((string, id) => {
    fs.writeFile(`file${id + 1}.txt`, string);
  });
};

const leitura = async () => {
  const promises = [];
  for (let i = 1; i <= arrayDeUso.length; i+= 1) {
    let files = fs.readFile(`file${i}.txt`, 'utf-8');
    promises.push(files);
  }

  const arquivosLidos = await Promise.all(promises)

  return arquivosLidos;
};

const main = async () => {
  escrever(arrayDeUso);
  const arquivos = await leitura();
  const fileAll = arquivos.join(' ');

  fs.writeFile('fileAll.txt', fileAll);
  return console.log(fileAll);
}

main();
