const express = require("express");
const router = express.Router();
const path = require("path");
const connection = require("../utils/db");
const bcrypt = require("bcrypt");

// 資料驗證
const { body, validationResult } = require("express-validator");
const dataValidation = [
  // 密碼驗證 --> 1.不為空值  2.密碼與確認密碼是否一致  3.min: 6; max: 12;
  body("password")
    .isLength({ min: 6, max: 12 })
    .withMessage("密碼長度為6-12字元"),
  body("rePassword")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("密碼驗證不一致"),

  // Email驗證 --> 1.不為空值  2.檢查Email格式  3.max: 100;
  body("email").isEmail().withMessage("請填寫正確的 Email 格式"),

  // 姓名驗證 --> 1.不為空值  2.max: 100;
  body("name").isEmpty().isLength({ max: 100 }).withMessage("請輸入使用者姓名"),

  // 生日驗證 --> 1.不為空值  2.檢查日期格式
  body("birthday").isEmpty().isDate().withMessage("日期格式不符合"),

  // 暱稱驗證 --> 1.接受空值   2.max: 100;
  body("nickname").isLength({ max: 100 }).withMessage("暱稱太長了"),

  // 地址驗證 --> 1.接受空值  2.max: 100;
  body("address").isLength({ max: 100 }).withMessage("地址太長了"),
];

// 大頭貼驗證 --> 1.接受空值  2.檔案格式是否正確  3.重新命名
// 手機驗證 --> 1.接受空值  2.台灣手機號碼格式

// 註冊
router.post("/register", dataValidation, async (req, res, next) => {
  console.log(req.body);

  // 帳號驗證 --> 1.不為空值  2.是否有重複註冊  3.max: 100;
  let memberAccount = await connection.queryAsync(
    "SELECT * FROM members WHERE account = ?",
    [req, body.account]
  );
  if (memberAccount.length > 0) {
    return next({
      status: 400,
      message: "此帳號已有人使用",
    });
  }

  // 密碼加密 --> bcrypt.hash(明文, salt);
  let hashPassword = await bcrypt.hash(req.body.password, 10);
  let result = await connection.queryAsync(
    "INSERT INTO member (account, password, name, nickname, gender, birthday, cellphone, email, picture, address) VALUES (?);",
    [
      [
        req.body.account,
        hashPassword,
        req.body.name,
        req.body.nickname,
        req.body.gender,
        req.body.birthday,
        req.body.cellphone,
        req.body.email,
        req.body.picture,
        // filename,
        req.body.address,
      ],
    ]
  );
});

// 登入
router.post("/login", async (req, res, next) => {
  console.log(req.body);

  // 1.確認有沒有帳號 (email 是否存在)
  //   a.如果沒有這個帳號，就回覆錯誤(400)
  let member = await connection.queryAsync(
    "SELECT * FROM member WHERE account = ?",
    ["meleesadmin"]
  );
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
