const connection = require('./conecction');

const serializeUser = (obj) => ({
  id: obj.user_id,
  firstName: obj.first_name,
  lastName: obj.last_name,
  email: obj.user_email,
  password: obj.user_password,
});

const addUser = async (
  { firstName, lastName, email, password },
  ) => {
  const [result] = await connection.execute(
    'INSERT INTO users (first_name, last_name, user_email, user_password) VALUES (?,?,?,?);',
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

const getAllUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM users;');
  return users.map(serializeUser);
};

const getUserById = async (id) => {
  const [user] = await connection.execute(
    'SELECT * FROM users WHERE user_id = ?;',
    [id],
  );

  return user.map(serializeUser)[0];
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
};
