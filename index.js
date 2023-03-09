const express = require("express");
const app = express();
const port = 5001;
const mysql = require("mysql");
const bodyparser = require("body-parser");
//Configuring express server
app.use(bodyparser.json());

//MySQL details
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "learner",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

app.get("/", (req, res) => {
  res.json({ message: "hey Faizn!" });
});

app.get("/learners", (req, res) => {
  mysqlConnection.query("SELECT * FROM learnerdetails", (err, rows, fields) => {
    if (!err) res.json(rows);
    else console.log(err);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
