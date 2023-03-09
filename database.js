const mysql = require("mysql");
//MySQL details

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'learner', //nom de la database
});

module.exports = mysqlConnection;
