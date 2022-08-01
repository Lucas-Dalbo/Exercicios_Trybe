const nameMidd = (req, res, next) => {
  const { productName } = req.body;
  if (!productName) throw { message: "O campo productName é obrigatório", cod: 400 };

  if (productName.length < 4) throw { message: "O campo productName deve ter pelo menos 4 caracteres", cod: 400 };

  next();
}

const errorMidd = (err, req, res, next) => {
  const erro = err.message;
  const motivo = err.cod;
  console.log(err);
  res.status(motivo).json({ message: erro });
}

module.exports = {
  nameMidd,
  errorMidd
}
