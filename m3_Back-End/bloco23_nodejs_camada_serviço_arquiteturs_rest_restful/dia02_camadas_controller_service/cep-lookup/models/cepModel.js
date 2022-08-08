const connection = require('./connection');

const getCEP = async (cep) => {
  const [result] = await connection.execute(
    'SELECT * FROM ceps WHERE cep = ?',
    [cep],
  );
  return result;
};

module.exports = { getCEP };
