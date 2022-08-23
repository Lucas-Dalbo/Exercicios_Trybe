require('dotenv').config();
const bookController = require('./controllers/bookController');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/books', bookController.getAll);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`On na porta ${PORT}`));