const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: 'root',
  password: process.env.PASSWORD,
  database: process.env.MYSQL_DB,
});

module.exports = connection;
