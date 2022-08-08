const isCepValid = (req, _res, next) => {
  const { cep } = req.params;
  const cepValidation = /^\d{5}-?\d{3}$/;
  if (!cep.match(cepValidation)) {
    const error = {
      code: 'invalidData',
      message: 'CEP invalido',
      status: 400,
    };
    next(error);
  }
  next();
};

module.exports = { isCepValid };
