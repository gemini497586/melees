const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.post("/:keyword", (req, res, next) => {
  console.log(req.params.keyword);
  connection.query(`SELECT * FROM product WHERE name LIKE '%${req.params.keyword}%'`, (err, result) => {
    res.json(result);
  });
});

module.exports = router;
