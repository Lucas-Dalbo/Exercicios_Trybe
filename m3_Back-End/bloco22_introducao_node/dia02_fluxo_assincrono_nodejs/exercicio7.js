const fs = require('fs').promises;
const readLine = require('readline-sync');

const changeFille = async (arquivo) => {
  try {
    const file = await fs.readFile(arquivo, 'utf-8');
    console.log(file);

    const oldWord = readLine.question('Qual palavra deseja substituir? ');
    const newWord = readLine.question('Qual palavra deseja por em seu lugar? ');

    const newFile = file.replace(new RegExp(oldWord, 'g'), newWord);
    console.log(newFile);

    const newFileName = readLine.question('Qual o nome do novo arquivo? ');
    await fs.writeFile(newFileName, newFile);
    return console.log('Arquivo criado com sucesso!')
  } catch (err) {
    console.log('Arquivo inexistente');
  }
}

changeFille('fileAll.txt');
