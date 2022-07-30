const express = require('express');
const bodyParser = require('body-parser');
const simpsonsJson = require('./simpsons.json');

const app = express();
app.use(bodyParser.json());

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
});

app.get('/simpsons', (_req, res) => {
  res.status(200).json(simpsonsJson);
});

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const resultado = simpsonsJson.find((pers) => pers.id === id);

  if(!resultado) return res.status(404).json({ message: 'simpson not found' });

  res.status(200).json(resultado);
});

app.post('/simpsons', (req, res) => {
  const { id, name } = req.body;

  const verificaID = simpsonsJson.find((pers) => pers.id === id);
  if(verificaID) return res.status(409).json({ message: 'id already exists' });

  const novoPersonagem = { id, name };
  simpsonsJson.push(novoPersonagem);

  res.status(204).end();
});
