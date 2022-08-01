const express = require('express');
const bodyParser = require('body-parser');
const saleMiddlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.use(saleMiddlewares.nameMidd);
app.use(saleMiddlewares.infoMidd);

app.post('/sales', (req, res) => {
  const { productName, infos } = req.body;
  res.status(201).json({ message: 'Venda cadastrada com sucesso' });
});

app.use(saleMiddlewares.errorMidd);

app.listen('3003', () => {
  console.log('Aplicação rodando na porta 3003');
});
