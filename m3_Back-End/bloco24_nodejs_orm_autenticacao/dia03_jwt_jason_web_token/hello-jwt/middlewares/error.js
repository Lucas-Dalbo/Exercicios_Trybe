const errorMiddleware = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400)
      .json({ error: { code: 'invalidData', message: err.details[0].message } });
  }

  if (!err.code || !err.status) {
    console.log(err);
    return res.status(500).json({ error: { code: 'Internal Error', message: err.message } }); 
  }

  const { code, message, status } = err;
  res.status(status).json({ error: { code, message } }); 
};

module.exports = errorMiddleware;