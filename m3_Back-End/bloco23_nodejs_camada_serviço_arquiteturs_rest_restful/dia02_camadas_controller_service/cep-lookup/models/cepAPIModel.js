const axios = require('axios').default;

const getCEP = async (cep) => {
  const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

  return result.data;
};

module.exports = { getCEP };
