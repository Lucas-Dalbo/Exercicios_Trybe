const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const singUpRouter = require('./singUpRouter');
app.use('/singup', singUpRouter);

const salesRouter = require('./salesRouter');
app.use('/sales', salesRouter);

const saleMiddlewares = require('./middlewares');
app.use(saleMiddlewares.errorMidd);

app.listen('3003', () => {
  console.log('Aplicação rodando na porta 3003');
});