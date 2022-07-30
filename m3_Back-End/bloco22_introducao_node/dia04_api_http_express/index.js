const express = require('express');
const bodyParser = require('body-parser');
const generateToken = require('./tokenGenerator');

const TOKENS = [ '3f231452234660d7' ];

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

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/vips', (req, res) => {
  const token = req.headers.authorization;
  const isTokenValid = TOKENS.find((keys) => keys === token);
  if(!token || token.length !== 16 || !isTokenValid) {
    return res.status(401).json({ message: 'Token inválido!' });
  }

  res.status(200).json({ message: 'Bem vindo a área VIP!'})
});

app.post('/singup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ( !email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'missing fields' });
  };
  
  if (
    email.length === 0
    || password.length === 0
    || firstName.length === 0
    || phone.length === 0
  ) return res.status(401).json({ message: 'missing fields' });
  

  const token = generateToken();
  TOKENS.push(token);

  res.status(200).json({ token });
});

app.all('*', (req, res) => {
  const { path } = req
  res.status(404).json({ erro: `Rota ${path} não existe!` })
});
