const express = require("express");
const app = express();
const port = 5001;
var mysqlConnection = require("./database");

const bodyparser = require("body-parser");
//Configuring express server

app.use(bodyparser.json());

app.get("/test", (req, res) => {
  res.json({ message: "Testing!!!!!!!!!!!!" });
});

app.get("/", (req, res) => {
  res.json({ message: "hey Faizn!" });
});

mysqlConnection.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

app.get("/learners", (req, res) => {
  console.log("Getting learners");
  mysqlConnection.query("SELECT * FROM learnerdetails", (err, rows, fields) => {
    if (!err) res.json(rows);
    else console.log(err);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
