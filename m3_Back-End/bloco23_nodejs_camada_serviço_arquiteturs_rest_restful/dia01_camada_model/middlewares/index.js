// const validateName = ()

const throwError = (message, status) => {
  throw new Error(JSON.stringify({
    message,
    status, 
  }));
};

const validadeFirstName = (firstName) => {
  if (firstName === undefined || firstName === null) throwError('"firstName" is required', 400);
  if (!firstName.length) throwError('"firstName" is not allowed to be empty', 400);
};

const validadeLastName = (lastName) => {
  if (lastName === undefined || lastName === null) throwError('"lastName" is required', 400);
  if (!lastName.length) throwError('"lastName" is not allowed to be empty', 400);
};

const validateEmail = (email) => {
  const VALID_EMAIL = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (email === undefined || email === null) throwError('"email" is required', 400);
  if (!email.length) throwError('"email" is not allowed to be empty', 400);
  if (!email.match(VALID_EMAIL)) throwError('"email" must be a valid email', 400);
};

const validatePassword = (password) => {
  if (password === undefined || password === null) throwError('"password" is required', 400);
  if (!password.length) throwError('"password" is not allowed to be empty', 400);
  if (password.length < 6) throwError('"password" must have at least 6 characters', 400);
};

const postUserMidd = (req, _res, next) => {
  const { firstName, lastName, email, password } = req.body;

  validadeFirstName(firstName);
  validadeLastName(lastName);
  validateEmail(email);
  validatePassword(password);

  next();
};

const errorMidd = (err, _req, res, _next) => {
  const { message, status } = JSON.parse(err.message);
  res.status(status).json({ message });
};

module.exports = {
  postUserMidd,
  errorMidd,
};
