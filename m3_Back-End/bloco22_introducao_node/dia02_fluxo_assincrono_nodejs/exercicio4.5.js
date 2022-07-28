const fs = require('fs').promises;
const callSimpsons = require('./simpsonCall');

const addNelson = async () => {
  const simpsonFamily = await callSimpsons('simpsonFamily.json');
  const nelson = await callSimpsons('simpsons.json')
    .then((result) => result.filter(({ name }) => name === 'Nelson Muntz'));

  const newFamily = [...simpsonFamily, ...nelson];
  fs.writeFile('simpsonFamily4.5.json', JSON.stringify(newFamily));

  return console.log(newFamily);
}

addNelson();