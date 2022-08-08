const express = require('express');
const cepMiddleware = require('../middlewares/cepMiddleware');
const cepController = require('../controller/cepController');

const cepRoute = express.Router();

cepRoute.get('/:cep', cepMiddleware.isCepValid, cepController.getCEP);

module.exports = cepRoute;
