const express = require("express");
const router = express.Router();
const path = require("path");
const pool = require("../utils/db");
const bcrypt = require("bcrypt");

// 登入
router.post("/login", async (req, res, next) => {
  console.log(req.body);

  // 1.確認有沒有帳號 (email 是否存在)
  //   a.如果沒有這個帳號，就回覆錯誤(400)
  let member = await pool.queryAsync("SELECT * FROM member WHERE account = ?", [
    "meleesadmin",
  ]);
  //   console.log(member);

  if (member.length === 0) {
    return next({
      status: 400,
      message: "找不到帳號",
    });
  }

  member = member[0];

  // 2.密碼比對
  //   a.不一致，回覆錯誤(400)
  //   let result = await bcrypt.compare(req.body.password, member.password);
  //   if (!result) {
  //     return next({
  //       status: 400,
  //       message: "密碼輸入錯誤",
  //     });
  //   }

  // 3.有帳號且密碼正確
  //   a.紀錄 session
  //   b.CSR: 回覆成功的訊息
  let returnMember = {
    id: member.id,
    name: member.name,
    nickname: member.nickname,
    picture: member.picture,
    email: member.email,
  };
  req.session.member = returnMember;
  res.json({
    name: member.name,
    nickname: member.nickname,
    picture: member.picture,
  });
});

// 登出
router.get("/logout", (req, res, next) => {
  req.session.member = null;
  res.sendStatus(202);
});

module.exports = router;
