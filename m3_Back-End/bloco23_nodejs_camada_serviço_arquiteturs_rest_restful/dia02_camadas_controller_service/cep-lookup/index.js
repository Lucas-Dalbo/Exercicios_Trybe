require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { errorMiddleware } = require('./middlewares/error');
const cepRoute = require('./routes/cepRoute');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.use('/cep', cepRoute);

app.use(errorMiddleware);

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
