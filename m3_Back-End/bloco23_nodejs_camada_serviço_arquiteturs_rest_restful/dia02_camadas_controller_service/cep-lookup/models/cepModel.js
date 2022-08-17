const connection = require('./connection');

const getCEP = async (cep) => {
  const [result] = await connection.execute(
    'SELECT * FROM ceps WHERE cep = ?',
    [cep],
  );
  return result;
};

const createCep = async ({ cepAjustado, logradouro }, bairroId) => {
  const [result] = await connection.execute(
    'INSERT INTO ceps (cep, logradouro, bairro_id) VALUE (?,?,?);',
    [cepAjustado, logradouro, bairroId],
  );

  return result;
};

module.exports = { getCEP, createCep };
