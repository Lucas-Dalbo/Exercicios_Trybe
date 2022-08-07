const validateEmail = (email) => {
  const VALID_EMAIL = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email || !email.match(VALID_EMAIL)) {
    throw new Error(
      JSON.stringify({
        message: 'Invalid email',
        status: 400,
      }),
    );
  }
};

const validatePassword = (password) => {
  if (password.length < 6) {
    throw new Error(
      JSON.stringify({
        message: '"password" must have at least 6 characters',
        status: 400,
      }),
    );
  }
};

const postUserMidd = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  validateEmail(email);
  validatePassword(password);

  next();
};

const errorMidd = (err, _req, res, _next) => {
  if (!err) {
    return res.status(500).json({ message: 'Internal Error' });
  }
  const { message, status } = JSON.parse(err.message);
  res.status(status).json({ message });
};

module.exports = {
  postUserMidd,
  errorMidd,
};
