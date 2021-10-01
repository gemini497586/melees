const { response } = require("express");
const express = require("express");
const router = express.Router();
const moment = require("moment");
const { loginCheckMiddleware } = require("../middlewares/auth");

const connection = require("../utils/db");

// 商品ID
router.post("/product/:id", async (req, res, next) => {
  let productImg = await connection.queryAsync("SELECT * FROM product_img WHERE product_id=?", [req.params.id]);

  let product = await connection.queryAsync("SELECT * FROM product WHERE id = ?", [req.params.id]);

  if (req.session.member === undefined) {
    res.json({ product, productImg });
  } else {
    let getSave = await connection.queryAsync("SELECT * FROM product_save WHERE member_id=? AND product_id=?", [req.session.member.id, req.params.id]);

    res.json({ product, productImg, getSave });
  }
});

// 商品首頁分類
router.post("/home/:category?/:sort?", async (req, res, next) => {
  let sqlProduct = "SELECT * FROM product ORDER BY"; //沒選擇商品分類的sql

  let category = req.params.category;
  let sqlProductCategory = "SELECT * FROM product WHERE category = ? ORDER BY"; // 有選擇商品分類的sql

  if (req.params.category === "undefined") {
    // 沒登入也沒選擇分類
    switch (req.params.sort) {
      case "價格由高至低":
        connection.query(sqlProduct + " price DESC", (err, result) => {
          res.json(result);
        });
        break;
      case "價格由低至高":
        connection.query(sqlProduct + " price", (err, result) => {
          res.json(result);
        });
        break;
      case "時間由新至舊":
        connection.query(sqlProduct + " id DESC", (err, result) => {
          res.json(result);
        });
        break;
      case "時間由舊至新":
        connection.query(sqlProduct + " id", (err, result) => {
          res.json(result);
        });
        break;
      default:
        connection.query(sqlProduct + " id", (err, result) => {
          res.json(result);
        });
        break;
    }
  } else if (req.params.category !== "undefined") {
    // 沒登入，有選擇分類
    switch (req.params.sort) {
      case "價格由高至低":
        connection.query(sqlProductCategory + " price DESC", category, (err, result) => {
          res.json(result);
        });
        break;
      case "價格由低至高":
        connection.query(sqlProductCategory + " price", category, (err, result) => {
          res.json(result);
        });
        break;
      case "時間由新至舊":
        connection.query(sqlProductCategory + " id DESC", category, (err, result) => {
          res.json(result);
        });
        break;
      case "時間由舊至新":
        connection.query(sqlProductCategory + " id", category, (err, result) => {
          res.json(result);
        });
        break;
      default:
        connection.query(sqlProductCategory + " id", category, (err, result) => {
          res.json(result);
        });
        break;
    }
  }
});

let createDate = moment().format("YYYYMMDD");

// 要登入才能使用
router.use(loginCheckMiddleware);

router.post("/get/save", (req, res, next) => {
  let member_id = req.session.member.id;
  connection.query("SELECT member_id, product_id FROM product_save WHERE member_id=? ORDER BY member_id", member_id, (err, result) => {
    res.json(result);
  });
});

router.post("/get-personalData", (req, res, next) => {
  let member_id = req.session.member.id;
  connection.query("SELECT * FROM member WHERE id=?", member_id, (err, result) => {
    res.json(result);
  });
});

// 購物車資料
router.post("/checkout-confirm", async (req, res, next) => {
  // console.log("資料-->: ", req.body);
  let member_id = req.session.member.id;

  if ((req.body.payment_method = "請選擇付款方式")) {
    // 如果沒有選擇結帳方式資料就不會存進資料庫
    res.json({ reply: "沒有選擇結帳方式" });
  } else {
    switch (req.body.payment_method) {
      case "貨到付款":
        req.body.payment_method = 1;
        break;
      case "信用卡":
        req.body.payment_method = 2;
        break;
      default:
        break;
    }

    let sql2 = "SELECT * FROM order_main_list ORDER BY id DESC LIMIT 1";
    let lastId = await connection.queryAsync(sql2);
    let newID = lastId[0].id + 1;

    for (let i = 0; i < req.body.carts.length; i++) {
      await connection.query("INSERT INTO order_detail_list (order_id, product_id, amount, price, total) VALUES (?)", [
        [newID, req.body.carts[i].id, req.body.carts[i].amount, req.body.carts[i].price, req.body.carts[i].amount * req.body.carts[i].price],
      ]);
    }

    await connection.query(
      "INSERT INTO order_main_list (member_id, name, phone, email, address, payment_method, create_date, status, total_price) VALUES (?);",
      [[member_id, req.body.name, req.body.phone, req.body.email, req.body.address, req.body.payment_method, createDate, req.body.status, req.body.total_price]]
    );
    res.json({ reply: "收到" });
  }
});

router.post("/order-personalData", (req, res, next) => {
  let member_id = req.session.member.id;
  connection.query("SELECT * FROM order_main_list WHERE member_id=? ORDER BY id DESC LIMIT 1", member_id, (err, response) => {
    res.json(response);
  });
});

router.post("/order-productData", async (req, res, next) => {
  let lastId = await connection.queryAsync("SELECT * FROM order_main_list ORDER BY id DESC LIMIT 1");
  let newID = lastId[0].id;

  connection.query("SELECT P.*, OD.amount FROM order_detail_list OD, product P WHERE OD.order_id=? AND OD.product_id=P.id", newID, (err, response) => {
    res.json(response);
  });
});

// 收藏商品
router.post("/product-save/:id", async (req, res, next) => {
  let member_id = req.session.member.id;

  try {
    console.log("收藏商品: ", req.params.id);
    await connection.queryAsync("INSERT INTO product_save (member_id, product_id) VALUES (?);", [[member_id, req.params.id]]);
    res.json({ reply: `已經成功收藏${req.params.id}商品` });
  } catch (err) {
    console.error(err);
  }
});

// 刪除收藏商品
router.post("/product-delete/:id", async (req, res, next) => {
  let member_id = req.session.member.id;

  try {
    console.log("取消收藏商品: ", req.params.id);
    await connection.queryAsync("DELETE FROM product_save WHERE member_id=? AND product_id=?", [member_id, req.params.id]);
    res.json({ reply: `已經取消收藏${req.params.id}商品` });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;

// 只要後端重新啟動，就需要重新登入一次，因為session的東西會被洗掉
