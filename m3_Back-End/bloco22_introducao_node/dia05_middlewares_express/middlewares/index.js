const TOKENS = require('../tokens');

const nameMidd = (req, _res, next) => {
  const { productName } = req.body;
  if (!productName) throw { message: 'O campo productName é obrigatório', cod: 400 };

  if (productName.length < 4) throw { message: 'O campo productName deve ter pelo menos 4 caracteres', cod: 400 };

  next();
}

const infoMidd = (req, _res, next) => {
  const { infos } = req.body;
  if (!infos) throw { message: 'O campo infos é obrigatorio', cod: 400 };

  const { saleDate, warrantyPeriod } = infos;
  if (!saleDate) throw { message: 'O campo saleDate é obrigatorio', cod: 400 };

  const validDate = /^\d{2}\/\d{2}\/\d{4}$/;
  /* https://bobbyhadz.com/blog/javascript-date-validation-dd-mm-yyyy */
  if (!saleDate.match(validDate)) throw { message: 'O campo saleDate não é uma data válida', cod: 400 };

  if (!warrantyPeriod) throw { message: 'O campo warrantyPeriod é obrigatório', cod: 400 };

  if (warrantyPeriod < 1 || warrantyPeriod > 3) throw { message: 'O campo warrantyPeriod deve estar entre 1 e 3', cod: 400 };

  next();
}

const userInfoMidd = (req, _res, next) => {
  const { email, password, firstName, phone } = req.body;

  if ( !email || !password || !firstName || !phone) {
    throw { message: 'missing fields', cod: 400 };
  };
  
  if (
    email.length === 0
    || password.length === 0
    || firstName.length === 0
    || phone.length === 0
  ) throw { message: 'missing fields', cod: 400 };

  next();
}

const tokenMidd = (req, _res, next) => {
  const token = req.headers.authorization;
  const isTokenValid = TOKENS.find((keys) => keys === token);

  if (
    !token
    || token.length !== 16
    || !isTokenValid
  ) throw { message: 'Token inválido', cod: 401 };

  next();
}

const errorMidd = (err, _req, res, _next) => {
  const { message, cod } = err;
  res.status(cod).json({ message });
}

module.exports = {
  nameMidd,
  infoMidd,
  userInfoMidd,
  tokenMidd,
  errorMidd
}
