const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./router/userRouter');
const middleware = require('./middlewares');

const app = express();
app.use(bodyParser.json());

app.use('/user', userRouter);

app.use(middleware.errorMidd);

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001');
});
