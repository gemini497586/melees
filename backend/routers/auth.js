const express = require("express");
const router = express.Router();
const path = require("path");
const pool = require("../utils/db");

// 登入
router.get("/login", async (req, res, next) => {
  console.log(req.body);
  // 1.確認有沒有帳號 (email 是否存在)
  //   a.如果沒有這個帳號，就回覆錯誤(400)
  let result = pool.query(
    "SELECT * FROM member WHERE account = ?",
    ["meleesadmin"],
    (err, result, fields) => {
      if (err) throw err;
      if (result.length > 0) {
        console.log("有帳號喔");
      }
      console.log(result[0]);
      res.json(result);
      // connection.release();
    }
  );
    console.log(result);

  // 2.密碼比對
  //   a.不一致，回覆錯誤(400)
  // 3.有帳號且密碼正確
  //   a.紀錄 session
  //   b.CSR: 回覆成功的訊息
});

// 登出

module.exports = router;
