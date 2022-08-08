const cepModel = require('../models/cepModel');

const ajusteCEP = (cep) => cep.replace(/-/, '');

const getCEP = async (cep) => {
  const newCEP = ajusteCEP(cep);
  const result = await cepModel.getCEP(newCEP);
  if (!result.length) return false;

  const { logradouro, bairro, localidade, uf } = result[0];
  return {
    newCEP,
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

module.exports = { getCEP };
