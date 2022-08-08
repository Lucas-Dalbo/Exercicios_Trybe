const errorMiddleware = (err, _req, res, _next) => {
  const { code, message, status } = err;
  res.status(status).json({ error: { code, message } }); 
};

module.exports = errorMiddleware;
