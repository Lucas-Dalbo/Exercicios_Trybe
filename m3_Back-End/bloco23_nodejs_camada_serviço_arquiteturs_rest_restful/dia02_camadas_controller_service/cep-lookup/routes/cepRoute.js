const express = require('express');
const cepMiddleware = require('../middlewares/cepMiddleware');
const cepController = require('../controller/cepController');

const cepRoute = express.Router();

cepRoute.get('/:cep', cepMiddleware.isCepValid, cepController.getCEP);

cepRoute.post('/', cepMiddleware.isDataValid, cepController.createCep);

module.exports = cepRoute;
