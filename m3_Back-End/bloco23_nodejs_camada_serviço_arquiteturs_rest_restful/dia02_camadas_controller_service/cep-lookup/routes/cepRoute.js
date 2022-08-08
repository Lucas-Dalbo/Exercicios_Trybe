const express = require('express');
const cepMiddleware = require('../middlewares/cepMiddleware');

const cepRoute = express.Router();

cepRoute.use(cepMiddleware.isCepValid);

// cepRoute.get('/:cep', async (req, res) => {
//   const { cep } = req.params;
// });

module.exports = cepRoute;
