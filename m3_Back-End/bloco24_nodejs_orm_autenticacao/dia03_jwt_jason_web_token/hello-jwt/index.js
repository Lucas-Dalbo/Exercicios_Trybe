const express = require('express');
require('dotenv').config();

const userRoute = require('./routes/userRoute');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/', userRoute);

app.use(errorMiddleware);

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Online na porta ${PORT}`));
