const Joi = require('joi');
const CustomError = require('../CustomError');

const userLogin = (req, res, next) => {
  const { username, password } = req.body;

  const { error } = Joi.object({
    username: Joi.string().alphanum().min(5).required().not().empty(),
    password: Joi.string().min(5).required().not().empty(),
  }).validate({ username, password });

  if (error) return next(error);

  next();
};

const isAdmin = (req, _res, next) => {
  const { admin } = req.data;

  if (!admin) throw new CustomError(403, 'Restricted access');

  next();
}

module.exports = { userLogin, isAdmin };
