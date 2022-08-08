require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
