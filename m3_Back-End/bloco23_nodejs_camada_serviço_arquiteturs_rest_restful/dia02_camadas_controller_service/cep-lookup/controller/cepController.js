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

module.exports = { getCEP };
