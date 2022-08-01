const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.listen('3003', () => {
  console.log('Aplicação rodando na porta 3003');
});

app.post('/sales', (req, res) => {
  const { productName, infos } = req.body;
});
