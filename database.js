const mysql = require("mysql");
//MySQL details
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port:3306,
  database: "learner",
  multipleStatements: true,
});

module.exports = mysqlConnection;
