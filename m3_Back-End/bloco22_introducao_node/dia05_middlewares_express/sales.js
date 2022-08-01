const express = require('express');
const bodyParser = require('body-parser');
const saleMiddlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.use(saleMiddlewares.nameMidd);

app.post('/sales', (req, res) => {
  const { productName, infos } = req.body;

});

app.use(saleMiddlewares.errorMidd);

app.listen('3003', () => {
  console.log('Aplicação rodando na porta 3003');
});
