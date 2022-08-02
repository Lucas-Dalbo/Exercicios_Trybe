const express = require('express');
const saleMiddlewares = require('./middlewares');
const TOKENS = require('./tokens')

const router = express.Router();

router.use(saleMiddlewares.nameMidd);
router.use(saleMiddlewares.infoMidd);
router.use(saleMiddlewares.tokenMidd);

router.post('/', (req, res) => {
  const { productName, infos } = req.body;
  res.status(201).json({ message: 'Venda cadastrada com sucesso' });
});

router.post('/', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  const token = generateToken();
  TOKENS.push(token);

  res.status(200).json({ token });
});

module.exports = router;
