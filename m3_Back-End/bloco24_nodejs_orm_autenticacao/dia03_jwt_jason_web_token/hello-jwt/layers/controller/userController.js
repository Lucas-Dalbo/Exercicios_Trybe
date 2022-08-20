const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET_KEY;
const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const userLogin = (req, res) => {
  const { username, password } = req.body;

  let admin = false;
  if (username === 'admin' && password === 's3nh4S3gur4???') admin = true;

  const payload = { username, admin };
  console.log(payload);
  const token = jwt.sign({ data: payload }, SECRET, jwtConfig);

  res.status(200).json({ token });
};

module.exports = { userLogin }