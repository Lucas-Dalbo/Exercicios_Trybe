const express = require('express');
const bodyParser = require('body-parser');
const userMidd = require('./middleware/userMidd');

const app = express();
app.use(bodyParser.json());

app.use('/user', userMidd);

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001');
});
