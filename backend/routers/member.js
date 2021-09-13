const express = require("express");
const router = express.Router();
const { loginCheckMiddleware } = require("../middlewares/auth");
const path = require("path");
const connection = require("../utils/db");
const bcrypt = require("bcrypt");
const { uuid } = require("uuidv4");

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

  // 手機驗證 --> 1.接受空值  2.台灣手機號碼格式
  body("cellphone")
    .custom((value, { req }) => {
      let phoneRegex = /^(09)[0-9]{8}$/;
      return phoneRegex.test(value);
    })
    .withMessage("手機號碼格式有誤"),
];

// multer 用來處理 From-data (Content-Type: multipart/form-data)
const multer = require("multer");
// 存在哪裡，存在硬碟就是用diskStorage()
const storage = multer.diskStorage({
  // 檔案儲存的路徑
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../", "images", "member"));
  },
  // 檔案命名
  filename: function (req, file, callback) {
    let ext = file.originalname.split(".").pop();
    console.log(`${uuid()}.${ext}`);
    callback(null, `${uuid()}.${ext}`);
  },
});
// 大頭貼驗證 --> 1.接受空值  2.檔案格式是否正確  3.重新命名
const uploader = multer({
  storage: storage,
  // 非常必要的檔案驗證
  fileFilter: function (req, file, callback) {
    console.log(file);
    if (
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/png" &&
      file.mimetype !== "image/jpg"
    ) {
      callback(new Error("不接受的檔案型態"), false);
    }
    callback(null, true);
  },
  limits: {
    fileSize: 1024 * 1024,
  },
});

// 先檢查是否已登入
router.use(loginCheckMiddleware);
// do something

router.post("/editinfo", (req, res, next) => {
  res.send("Hello with member editinfo");
});

router.post("/editpwd", dataValidation, async (req, res, next) => {
  // dataValidation --> 密碼格式要符合 + 確定新密碼一致
  let memberId = req.session.member.id;
  console.log(req.session.member);
  // 舊密碼跟資料庫密碼比對，錯誤回覆400
  let oldPassword = await connection.queryAsync(
    "SELECT password FROM member WHERE id = ?",
    [memberId]
  );
  console.log("oldPassword", oldPassword);
  console.log("req.body.oldPassword: ", req.body.oldPassword);
  let confirmResult = await bcrypt.compare(req.body.oldPassword.toString(), oldPassword);
  if (!confirmResult) {
    return next({
      status: 400,
      message: "密碼輸入錯誤",
    });
  }

  // 新密碼 !== 舊密碼
  if (req.body.oldPassword === req.body.password) {
    return next({
      status: 400,
      message: "新舊密碼不可以一致",
    });
  }

  // 更新密碼
  let result = await connection.queryAsync(
    "UPDATE member SET password = ? WHERE id = ?",
    [bcrypt.hash(req.body.password, 10), memberId]
  );

  res.send("Hello with member editpwd");
});

router.get("/", (req, res, next) => {
  res.send("Hello with member center");
});

module.exports = router;
