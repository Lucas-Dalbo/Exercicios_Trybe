const express = require('express');
const saleMiddlewares = require('./middlewares');
const TOKENS = require('./tokens');
const generateToken = require('./helpers/tokenGenerator');

const router = express.Router();

router.use(saleMiddlewares.userInfoMidd);

router.post('/', (_req, res) => {
  const token = generateToken();
  TOKENS.push(token);

  res.status(200).json({ token });
});

module.exports = router;
