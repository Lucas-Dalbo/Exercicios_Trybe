const cepModel = require('../models/cepModel');

const ajusteCEP = (cep) => cep.replace(/-/, '');

const insertTraco = (cep) => {
  const part1 = cep.slice(0, 5);
  const part2 = cep.slice(5);

  return `${part1}-${part2}`;
};

const getCEP = async (cep) => {
  const newCEP = ajusteCEP(cep);
  const result = await cepModel.getCEP(newCEP);
  if (!result.length) return false;

  const { logradouro, bairro, localidade, uf } = result[0];
  return {
    cep: insertTraco(newCEP),
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

module.exports = { getCEP };
