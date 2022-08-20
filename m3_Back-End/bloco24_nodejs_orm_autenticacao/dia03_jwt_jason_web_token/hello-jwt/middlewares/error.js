const errorMiddleware = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400)
      .json({ error: { message: err.details[0].message } });
  }

  if (!err.message || !err.status) {
    console.log(err);
    return res.status(500).json({ error: { message: err.message } }); 
  }

  if (err.name === 'invalid signature' ) return res.status(401).json({ error: { message } }); 

  const { message, status } = err;
  res.status(status).json({ error: { message } }); 
};

module.exports = errorMiddleware;