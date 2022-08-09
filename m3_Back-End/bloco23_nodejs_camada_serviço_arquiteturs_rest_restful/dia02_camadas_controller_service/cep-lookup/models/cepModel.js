const connection = require('./connection');

const getCEP = async (cep) => {
  const [result] = await connection.execute(
    'SELECT * FROM ceps WHERE cep = ?',
    [cep],
  );
  return result;
};

const createCep = async ({ cepAjustado, logradouro, bairro, localidade, uf }) => {
  const [result] = await connection.execute(
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUE (?,?,?,?,?);',
    [cepAjustado, logradouro, bairro, localidade, uf],
  );

  return result;
};

module.exports = { getCEP, createCep };
