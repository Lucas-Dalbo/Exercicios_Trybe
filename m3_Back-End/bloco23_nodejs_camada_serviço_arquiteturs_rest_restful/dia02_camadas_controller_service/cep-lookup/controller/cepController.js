const cepServices = require('../services/cepServices');

const getCEP = async (req, res) => {
  const { cep } = req.params;
  
  const cepFound = await cepServices.getCEP(cep);

  if (!cepFound) {
    return res.status(404)
      .json({ error: { code: 'notFound', message: 'CEP não encontrado' } });
  }

  return res.status(200).json(cepFound);
};

const createCep = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const newCEP = await cepServices.createCep({ cep, logradouro, bairro, localidade, uf });

  if (newCEP.code === 409) return next(newCEP);

  res.status(201).json(newCEP);
};

module.exports = { getCEP, createCep };
