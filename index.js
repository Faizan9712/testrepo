const express = require("express");
const app = express();
const port = 5001;
var fs = require("fs");
var mysqlConnection = require("./database");

const bodyparser = require("body-parser");
//Configuring express server

app.use(bodyparser.json());

app.get("/test", (req, res) => {
  res.json({ message: "Testing!!!!!!!!!!!!" });
});

app.get("/pic", (req, res) => {
  fs.readFile("./"+"1526546097669.jpg", function (err, data) {
    if (err) {
      console.log(err);
      res.json("wait");
    } // Fail if the file can't be read.
    // res.writeHead(200, { "Content-Type": contentType });
    res.end(data); // Send the file data to the browser.
  });
});

mysqlConnection.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

app.get("/", (req, res) => {
  console.log("Getting learners");
  mysqlConnection.query("SELECT * FROM learnerdetails", (err, rows, fields) => {
    if (!err) res.json(rows);
    else {
      res.json({ message: "Table Not found" });
      console.log(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
