const express = require("express");
const router = express.Router();
const moment = require("moment");

const connection = require("../utils/db");

router.get("/product/:id", (req, res, next) => {
  let sqlSelectID = "SELECT * FROM product WHERE id = ?";
  console.log("商品", req.params.id);
  connection.query(sqlSelectID, req.params.id, (err, result) => {
    res.json(result);
  });
});

router.get("/home/:category?", (req, res, next) => {
  if (req.params.category === "undefined") {
    connection.query("SELECT * FROM product", (err, result) => {
      // console.log("select All");
      res.json(result);
    });
  } else {
    connection.query("SELECT * FROM product WHERE category = ?", req.params.category, (err, result) => {
      // console.log(req.params.category);
      res.json(result);
    });
  }
});

let createDate = moment().format("YYYYMMDD");

router.post("/checkout-confirm", async (req, res, next) => {
  console.log("資料-->: ", req.body);

  for (let i = 0; i < req.body.carts.length; i++) {
    connection.query("INSERT INTO order_detail_list (order_id, product_id, amount, price, total) VALUES (?)", [
      [2, req.body.carts[i].id, req.body.carts[i].amount, req.body.carts[i].price, req.body.carts[i].amount * req.body.carts[i].price],
    ]);
  }

  switch (req.body.payment_method) {
    case "貨到付款":
      req.body.payment_method = 1;
      break;
    case "信用卡":
      req.body.payment_method = 2;
      break;
    default:
      req.body.payment_method = 0;
      break;
  }

  connection.query("INSERT INTO order_main_list (member_id, name, phone, email, address, payment_method, create_date, status, total_price) VALUES (?);", [
    [
      req.body.member_id,
      req.body.name,
      req.body.phone,
      req.body.email,
      req.body.address,
      req.body.payment_method,
      createDate,
      req.body.status,
      req.body.total_price,
    ],
  ]);
  res.json({ reply: "收到" });
});

module.exports = router;
