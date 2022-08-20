const express = require('express');

const userMiddleware = require('../middlewares/userMiddleware');
const userController = require('../layers/controller/userController');
const tokenValidation = require('../auth/validateJWT');

const userRoute = express.Router();

userRoute.get('/teste', (_req, res) => {
  res.status(200).json({ message: 'Aplicação rodando' });
});

userRoute.post('/login', userMiddleware.userLogin, userController.userLogin);
userRoute.get('/users/me', tokenValidation, userController.userGet);

module.exports = userRoute;
