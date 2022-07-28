const fs = require('fs').promises;
const callSimpsons = require('./simpsonCall');

const familiaSimpson = async () => {
  const personagens = await callSimpsons();

  const simpsonFam = personagens
    .filter(({ id }) => ['1', '2', '3', '4'].includes(id));

  fs.writeFile('simpsonFamily.json', JSON.stringify(simpsonFam));
}

familiaSimpson();
