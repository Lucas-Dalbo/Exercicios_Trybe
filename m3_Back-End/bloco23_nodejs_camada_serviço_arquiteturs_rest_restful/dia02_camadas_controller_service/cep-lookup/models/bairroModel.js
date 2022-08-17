const connection = require('./connection');

const createBairro = async ({ bairro, localidade, uf }) => {
  const [result] = await connection.execute(
    'INSERT INTO bairros (bairro, localidade, uf) VALUE (?,?,?);',
    [bairro, localidade, uf],
  );

  return result.insertId;
};

module.exports = { createBairro };
