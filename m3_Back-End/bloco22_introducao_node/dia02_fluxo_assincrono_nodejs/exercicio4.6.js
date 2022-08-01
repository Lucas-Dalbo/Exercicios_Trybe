const fs = require('fs').promises;
const callSimpsons = require('./simpsonCall');

const fixSimpsonsFam = async () => {
  const famSimpson = await callSimpsons('simpsonFamily4.5.json');
  const maggie = await callSimpsons('simpsons.json')
    .then((result) => result.filter(({ name }) => name === 'Maggie Simpson'));

  const fixedFamily = famSimpson
    .map((perso) => perso.name === 'Nelson Muntz' ? maggie[0] : perso);

  fs.writeFile('simpsonFamily4.6.json', JSON.stringify(fixedFamily));
  
  return console.log(fixedFamily);
}

fixSimpsonsFam();
