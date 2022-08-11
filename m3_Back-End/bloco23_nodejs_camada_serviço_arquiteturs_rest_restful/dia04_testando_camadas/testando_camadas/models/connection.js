const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: 'root',
  password: process.env.USER_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
});

module.exports = connection;