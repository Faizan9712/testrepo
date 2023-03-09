const mysql = require("mysql");
//MySQL details

const mysqlConnection = mysql.createConnection({
  host: "database-1.ct814wzajzwe.us-east-1.rds.amazonaws.com",
  port:"3306",
  user: "admin",
  password: "faizan9712",
  database: "my_db", //nom de la database
});

module.exports = mysqlConnection;
