const Joi = require('joi');

const userLogin = (req, res, next) => {
  const { username, password } = req.body;

  const { error } = Joi.object({
    username: Joi.string().alphanum().min(5).required().not().empty(),
    password: Joi.string().min(5).required().not().empty(),
  }).validate({ username, password });

  if (error) return next(error);

  next();
};

module.exports = { userLogin };
