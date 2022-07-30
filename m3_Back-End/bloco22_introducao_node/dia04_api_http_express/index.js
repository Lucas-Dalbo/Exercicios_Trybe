const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  if(!name) return res.status(400).send({ erro: 'name não informado' });
  return res.status(200).json({ message: `Hello, ${name}!`});
});
