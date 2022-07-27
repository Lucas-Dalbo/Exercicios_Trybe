const axios = require('axios').default;
const fs = require('fs').promises;

const fetchInfo = async () => {
  try {
    const result = await axios.get('https://assets.app.betrybe.com/back-end/nodejs/async-flow/simpsons-94f8eb570f2ea830462ee2375ded177b.json');
    await fs.writeFile('simpsons.json', JSON.stringify(result.data));
    return console.log('sucesso');
  } catch (error) {
    console.log(error.message);
  }
};

fetchInfo();
