const errorMiddleware = (err, _req, res, _next) => {
  if (!err.code || !err.status) {
    // console.log(err);
    return res.status(500).json({ error: err.message }); 
  }

  const { code, message, status } = err;
  res.status(status).json({ error: { code, message } }); 
};

module.exports = errorMiddleware;
