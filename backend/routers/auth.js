const express = require("express");
const router = express.Router();
const path = require("path");
const connection = require("../utils/db");
const bcrypt = require("bcrypt");
const { uuid } = require('uuidv4');

// 資料驗證
const { body, validationResult } = require("express-validator");
const dataValidation = [
  // 帳號驗證 --> 1.不為空值  2.max: 100;
  body("account")
    // .isEmpty()
    .isLength({ max: 100 })
    .withMessage("帳號不可空白或過長"),
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
  body("name").isLength({ max: 100 }).withMessage("請輸入使用者姓名"),

  // 生日驗證 --> 1.不為空值  2.檢查日期格式
  body("birthday").isDate().withMessage("日期格式不符合"),

  // 暱稱驗證 --> 1.接受空值   2.max: 100;
  body("nickname").isLength({ max: 100 }).withMessage("暱稱太長了"),

  // 地址驗證 --> 1.接受空值  2.max: 100;
  body("address").isLength({ max: 100 }).withMessage("地址太長了"),
];

// multer 用來處理 From-data (Content-Type: multipart/form-data)
const multer = require("multer");
// 存在哪裡，存在硬碟就是用diskStorage()
const storage = multer.diskStorage({
  // 檔案儲存的路徑
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../", "images", "member"))
  },
  // 檔案命名
  filename: function (req, file, callback) {
    let ext = file.originalname.split(".").pop();
    console.log(`${uuid()}.${ext}`);
    callback(null, `${uuid()}.${ext}`)
  },
});
// 大頭貼驗證 --> 1.接受空值  2.檔案格式是否正確  3.重新命名
const uploader = multer({
  storage: storage,
  // 非常必要的檔案驗證
  fileFilter: function (req, file, callback) {
    console.log(file);
    if (
      file.mimetype !== "imgae/jpeg" &&
      file.mimetype !== "image/png" &&
      file.mimetype !== "imgae/jpg"
    ) {
      callback(new Error("不接受的檔案型態"), false);
    }
    callback(null, true);
  },
  limits: {
    fileSize: 1024 * 1024,
  },
});

// 手機驗證 --> 1.接受空值  2.台灣手機號碼格式

// 註冊
router.post(
  "/register",
  // 只有一張圖片的話就用single()
  uploader.single("picture"), 
  dataValidation,
  async (req, res, next) => {
    // 套件回覆的驗證結果
    const dataValidationResult = validationResult(req);
    if (!dataValidationResult.isEmpty()) {
      let error = dataValidationResult.array();
      console.log(error);
      return res
        .status(400)
        .json({ field: error[0].param, message: error[0].msg });
    }

    // 確認資料是否有正確取得
    console.log(req.body);
    console.log(req.file);

    // 帳號驗證 --> 3.是否有重複註冊
    let memberAccount = await connection.queryAsync(
      "SELECT * FROM member WHERE account = ?",
      [req.body.account]
    );
    if (memberAccount.length > 0) {
      return next({
        status: 400,
        message: "此帳號已有人使用",
      });
    }

    let filename = req.file ? "/" + req.file.filename : "";
    // 密碼加密 --> bcrypt.hash(明文, salt);
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    // let result = await connection.queryAsync(
    //   "INSERT INTO member (account, password, name, nickname, gender, birthday, cellphone, email, picture, address) VALUES (?);",
    //   [[
    //       req.body.account,
    //       hashPassword,
    //       req.body.name,
    //       req.body.nickname,
    //       req.body.gender,
    //       req.body.birthday,
    //       req.body.cellphone,
    //       req.body.email,
    //       filename,
    //       req.body.address,
    //     ]]
    // );
    console.log("預計存入資料庫的內容：");
    console.log([
      req.body.account,
      hashPassword,
      req.body.name,
      req.body.nickname,
      req.body.gender,
      req.body.birthday,
      req.body.cellphone,
      req.body.email,
      filename,
      req.body.address,
    ]);

    res.json({}); //回覆res --> 結束路由中間件
  }
);

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
