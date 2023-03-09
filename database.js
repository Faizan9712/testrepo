const mysql = require("mysql");
//MySQL details
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "learner",
  multipleStatements: true,
});

module.exports = mysqlConnection;
