const express = require('express');

const userMiddleware = require('../middlewares/userMiddleware');
const userController = require('../layers/controller/userController');

const userRoute = express.Router();

userRoute.get('/teste', (_req, res) => {
  res.status(200).json({ message: 'Aplicação rodando' });
});

userRoute.post('/login', userMiddleware.userLogin, userController.userLogin);

module.exports = userRoute;
