const jwt = require('jsonwebtoken');
const CustomError = require('../CustomError');

const SECRET = process.env.SECRET_KEY;

const tokenValidation = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) throw new CustomError(401, 'Token not found');

  try {
    const decoded = jwt.verify(token, SECRET);
    req.data = decoded.data;

    next();
  } catch (error) {
    throw new CustomError(401, error.message );
  }
};

module.exports = tokenValidation;