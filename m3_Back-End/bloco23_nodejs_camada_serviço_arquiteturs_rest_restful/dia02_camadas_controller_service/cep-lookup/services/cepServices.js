const cepModel = require('../models/cepModel');
const cepAPIModel = require('../models/cepAPIModel');
const { errorFormat } = require('../middlewares/error');

const ajusteCEP = (cep) => cep.replace(/-/, '');

const insertTraco = (cep) => {
  const part1 = cep.slice(0, 5);
  const part2 = cep.slice(5);
  return `${part1}-${part2}`;
};

const searchCep = async (cepAjustado) => {
  const cepFound = await cepAPIModel.getCEP(cepAjustado);
  if (cepFound.erro) return false;

  const { cep, logradouro, bairro, localidade, uf } = cepFound;
  await cepModel.createCep({ cepAjustado, logradouro, bairro, localidade, uf });

  return { cep, logradouro, bairro, localidade, uf };
};

const getCEP = async (cep) => {
  const newCEP = ajusteCEP(cep);
  const result = await cepModel.getCEP(newCEP);
  
  if (!result.length) return searchCep(cep);

  const { logradouro, bairro, localidade, uf } = result[0];
  return {
    cep: insertTraco(newCEP),
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const cepAjustado = ajusteCEP(cep);
  const result = await cepModel.getCEP(cepAjustado);
  if (result.length) return errorFormat('alreadyExists', 'CEP já existente', 409);

  const novoCEP = await cepModel
    .createCep({ cepAjustado, logradouro, bairro, localidade, uf });
  
  if (!novoCEP.affectedRows) return ('internalError', 'CEP não foi criado', 500);

  return {
    cep: insertTraco(cepAjustado),
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

module.exports = { getCEP, createCep };
