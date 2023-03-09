const mysql = require("mysql");
//MySQL details

const mysqlConnection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE, //nom de la database
});

module.exports = mysqlConnection;
