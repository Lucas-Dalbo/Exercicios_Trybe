const Joi = require('joi');
const { errorFormat } = require('./error');

const isCepValid = (req, _res, next) => {
  const { cep } = req.params;
  const cepValidation = /^\d{5}-?\d{3}$/;
  if (!cep.match(cepValidation)) {
    const error = errorFormat('invalidData', 'CEP inválido', 400);
    next(error);
  }
  next();
};

const isDataValid = (req, _res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error } = Joi.object({
    cep: Joi.string().pattern(new RegExp(/^\d{5}-?\d{3}$/)).required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate({ cep, logradouro, bairro, localidade, uf });

  if (error) return next(error);

  next();
};

module.exports = { isCepValid, isDataValid };
