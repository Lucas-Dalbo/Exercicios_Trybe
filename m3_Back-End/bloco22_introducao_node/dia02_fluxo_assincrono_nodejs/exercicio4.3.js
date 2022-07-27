const fs = require('fs').promises;
const callSimpsons = require('./simpsonCall');

const retirando10e6 = async () => {
  const personagens = await callSimpsons();

  const busca = personagens
    .filter(({ id }) => id !== '6' && id !== '10');

  fs.writeFile('simpsons4.3.json', JSON.stringify(busca));
};

retirando10e6();