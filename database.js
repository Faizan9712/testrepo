const mysql = require("mysql");
//MySQL details
var mysqlConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  port: 3306,
  database: "learner",
});

module.exports = mysqlConnection;
