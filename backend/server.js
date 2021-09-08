const { res, req, response } = require("express");
const express = require("express");
const connection = require("./utils/connect");

let app = express();
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/market", (req, res) => {
  const sqlSelect = "SELECT * FROM product";
  connection.query(sqlSelect, (err, result) => {
    res.json(result);
  });
});

app.listen(3001, () => {
  console.log("running port on 3001");
});
