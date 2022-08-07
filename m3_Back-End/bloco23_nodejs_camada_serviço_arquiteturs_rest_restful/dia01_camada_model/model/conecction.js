const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '573108',
  database: 'exercicio_23_1',
});

module.exports = connection;
