const isValidDate = require('pretty-easy-date-check');
/* https://www.npmjs.com/package/pretty-easy-date-check */

const nameMidd = (req, res, next) => {
  const { productName } = req.body;
  if (!productName) throw { message: 'O campo productName é obrigatório', cod: 400 };

  if (productName.length < 4) throw { message: 'O campo productName deve ter pelo menos 4 caracteres', cod: 400 };

  next();
}

const infoMidd = (req, res, next) => {
  const { infos } = req.body;
  if (!infos) throw { message: 'O campo infos é obrigatorio', cod: 400 };

  console.log(infos);
  const { saleDate, warrantyPeriod } = infos;
  if (!saleDate) throw { message: 'O campo saleDate é obrigatorio', cod: 400 };

  if (!isValidDate(saleDate)) throw { message: 'O campo saleDate não é uma data válida', cod: 400 };

  if (!warrantyPeriod) throw { message: 'O campo warrantyPeriod é obrigatório', cod: 400 };

  if (warrantyPeriod < 1 || warrantyPeriod > 3) throw { message: 'O campo warrantyPeriod deve estar entre 1 e 3', cod: 400 };

  next();
}

const errorMidd = (err, _req, res, _next) => {
  const { message, cod } = err;
  res.status(cod).json({ message });
}

module.exports = {
  nameMidd,
  infoMidd,
  errorMidd
}
