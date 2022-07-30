const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  if(!name) return res.status(400).send({ erro: 'name não informado' });

  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if(!name) return res.status(400).send({ erro: 'name não informado' });
  if(!age) return res.status(400).send({ erro: 'age não informado' });

  if(age > 17) return res.status(200).json({ message: `Hello, ${name}!` });
  if(age < 17) return res.status(401).json({ message: 'Unauthorized' });
});
