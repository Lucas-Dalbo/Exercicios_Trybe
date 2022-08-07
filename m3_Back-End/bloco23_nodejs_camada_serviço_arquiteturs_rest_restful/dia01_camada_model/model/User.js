const connection = require('./conecction');

const addUser = async (
  { firstName, lastName, email, password },
  ) => {
  const [result] = await connection.execute(
    'INSERT INTO users (first_name, last_name, user_email, user_password) VALUES (?,?,?,?)',
    [firstName, lastName, email, password],
  );

  return {
    id: result.insertId,
    firstName,
    lastName,
    email,
    password,
  };
};

module.exports = {
  addUser,
};
