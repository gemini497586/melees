const express = require("express");
const router = express.Router();
const path = require("path");
const connection = require("../utils/db");
const bcrypt = require("bcrypt");
const { v4 } = require("uuid");
const moment = require("moment");
const passport = require("passport");
const GoogleTokenStrategy = require("passport-google-token").Strategy;
const FacebookTokenStrategy = require("passport-facebook-token");

// 資料驗證
const { body, validationResult } = require("express-validator");
const dataValidation = [
  // 帳號驗證 --> 1.不為空值  2.max: 100;
  body("account")
    .custom((value, { req }) => {
      return value ? true : false;
    })
    .withMessage("B0101"),
  body("account").isLength({ max: 100 }).withMessage("B0102"),
  // 密碼驗證 --> 1.不為空值  2.密碼與確認密碼是否一致  3.min: 6; max: 12;
  body("password")
    .custom((value, { req }) => {
      return value ? true : false;
    })
    .withMessage("C0101"),
  body("password").isLength({ min: 6, max: 12 }).withMessage("C0102"),
  body("rePassword")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("C0203"),

  // Email驗證 --> 1.不為空值  2.檢查Email格式
  body("email")
    .custom((value, { req }) => {
      return value ? true : false;
    })
    .withMessage("I0101"),
  body("email").isEmail().withMessage("I0102"),

  // 姓名驗證 --> 1.不為空值  2.max: 100;
  body("name")
    .custom((value, { req }) => {
      return value ? true : false;
    })
    .withMessage("D0101"),
  body("name").isLength({ max: 100 }).withMessage("D0102"),

  // 生日驗證 --> 1.不為空值  2.檢查日期格式
  body("birthday")
    .custom((value, { req }) => {
      return value ? true : false;
    })
    .withMessage("G0101"),
  body("birthday").isDate().withMessage("G0102"),

  // 暱稱驗證 --> 1.接受空值   2.max: 100;
  body("nickname").isLength({ max: 100 }).withMessage("E0101"),

  // 地址驗證 --> 1.接受空值  2.max: 100;
  body("address").isLength({ max: 100 }).withMessage("J0101"),

  // 手機驗證 --> 1.接受空值  2.台灣手機號碼格式
  body("cellphone")
    .custom((value, { req }) => {
      let phoneRegex = /^(09)[0-9]{8}$/;
      return phoneRegex.test(value);
    })
    .withMessage("H0102"),
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
    callback(null, `${v4()}.${ext}`);
  },
});
// 大頭貼驗證 --> 1.接受空值  2.檔案格式是否正確  3.重新命名
const uploader = multer({
  storage: storage,
  // 非常必要的檔案驗證
  fileFilter: function (req, file, callback) {
    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png" && file.mimetype !== "image/jpg") {
      callback(
        new Error({
          message: "不接受的檔案型態",
          category: "auth",
          type: "picture",
          code: "K0101",
        }),
        false
      );
    }
    callback(null, true);
  },
  limits: {
    fileSize: 1024 * 1024,
  },
});

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
      let errors = dataValidationResult.array();
      // console.log(errors);

      // 當 express-validator 回覆多個錯誤時
      if (errors.length > 1) {
        for (let i = 0; i < errors.length; i++) {
          errors[i] = {
            category: "auth",
            type: errors[i].param,
            code: errors[i].msg,
          };
        }
        console.log("several errors", errors);
        return res.status(400).json(errors);
      }
      // 當 express-validator 回覆1個錯誤時
      console.log("single errors", errors);
      return res.status(400).json({ category: "auth", type: errors[0].param, code: errors[0].msg });
    }

    // 確認資料是否有正確取得
    console.log("register req.body: ", req.body);
    console.log("register req.file: ", req.file);

    // 帳號驗證 --> 3.是否有重複註冊
    let memberAccount = await connection.queryAsync("SELECT * FROM member WHERE account = ?", [req.body.account]);
    if (memberAccount.length > 0) {
      return next({
        status: 400,
        category: "auth",
        type: "account",
        code: "B0103",
      });
    }

    // 密碼加密 --> bcrypt.hash(明文, salt);
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    let filename = req.file ? "/" + req.file.filename : "";
    let createDate = moment().format("YYYYMMDD");
    let result = await connection.queryAsync(
      "INSERT INTO member (account, password, name, nickname, gender, birthday, phone, email, picture, address, create_date) VALUES (?);",
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
          filename,
          req.body.address,
          createDate,
        ],
      ]
    );
    console.log("存入資料庫的內容：", result);

    res.json({ category: "auth", type: "register", code: "A0003" });
  }
);

// 登入
router.post("/login", async (req, res, next) => {
  console.log(req.body);

  // 1.確認有沒有帳號 (email 是否存在)
  //   a.如果沒有這個帳號，就回覆錯誤(400)
  let member = await connection.queryAsync("SELECT * FROM member WHERE account = ?", [req.body.account]);
  //   console.log(member);

  if (member.length === 0) {
    return next({
      status: 400,
      category: "auth",
      type: "account",
      code: "L0101",
    });
  }

  member = member[0];

  // 2.密碼比對
  //   a.不一致，回覆錯誤(400)
  let result = await bcrypt.compare(req.body.password, member.password);
  if (!result) {
    return next({
      status: 400,
      category: "auth",
      type: "password",
      code: "L0101",
    });
  }

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
    category: "auth",
    type: "login",
    code: "A0000",
    name: member.name,
    nickname: member.nickname,
    picture: member.picture,
  });
});

// google 快速登入
passport.use(
  new GoogleTokenStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    },
    async function (accessToken, refreshToken, profile, cb) {
      // console.log("Google profile", profile);

      let member = await connection.queryAsync("SELECT * FROM member WHERE google_id = ?", [profile.id]);
      let returnMember = null;
      if (member.length > 0) {
        // 已經註冊過
        member = member[0];
        returnMember = {
          id: member.id,
          name: member.name,
          nickname: member.nickname,
          picture: member.picture,
          email: member.email,
        };
      } else {
        // 尚未註冊，補註冊～～
        console.log(profile._json);
        let result = await connection.queryAsync("INSERT INTO member (google_id, account, password, name, email, picture, create_date) VALUES (?);", [
          [
            profile.id,
            "google" + profile._json.email,
            "googlelogin",
            profile._json.name,
            profile._json.email,
            profile._json.picture,
            moment().format("YYYYMMDD"),
          ],
        ]);
        console.log(result);
        returnMember = {
          id: result.insertId,
          name: profile._json.name,
          nickname: "",
          picture: profile._json.picture,
          email: profile._json.email,
        };
      }
      cb(null, returnMember);
    }
  )
);

router.post("/login/google", passport.authenticate("google-token", { session: false }), async (req, res, next) => {
  console.log(req.user);
  if (!req.user) {
    console.log("Google Login 登入失敗");
    return res.json(401);
  }
  console.log("Google 登入成功");
  // 一般登入，帳號密碼驗證後，應該要做的事
  req.session.member = req.user;
  // 回覆給前端
  res.json({
    category: "auth",
    type: "login",
    code: "A0005",
    name: req.user.name,
    nickname: req.user.nickname,
    picture: req.user.picture,
  });
});

// facebook 快速登入
passport.use(
  new FacebookTokenStrategy(
    {
      clientID: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    },
    async function (accessToken, refreshToken, profile, cb) {
      // console.log("Fb profile", profile);

      let member = await connection.queryAsync("SELECT * FROM member WHERE facebook_id = ?", [profile.id]);
      let returnMember = null;
      if (member.length > 0) {
        // 已經註冊過
        member = member[0];
        returnMember = {
          id: member.id,
          name: member.name,
          nickname: member.nickname,
          picture: member.picture,
          email: member.email,
        };
      } else {
        // 尚未註冊，補註冊～～
        console.log(profile._json);
        let result = await connection.queryAsync("INSERT INTO member (facebook_id, account, password, name, email, picture, gender, create_date) VALUES (?);", [
          [
            profile.id,
            "facebook" + profile.emails[0].value,
            "facebooklogin",
            profile.displayName,
            profile.emails[0].value,
            profile.photos[0].value,
            profile.gender,
            moment().format("YYYYMMDD"),
          ],
        ]);
        console.log(result);
        returnMember = {
          id: result.insertId,
          name: profile.displayName,
          nickname: "",
          picture: profile.photos[0].value,
          email: profile.emails[0].value,
        };
      }
      cb(null, returnMember);
    }
  )
);

router.post("/login/facebook", passport.authenticate("facebook-token", { session: false }), (req, res, next) => {
  if (!req.user) {
    console.log("FB Login 登入失敗");
    return res.json(401);
  }
  console.log("FB 登入成功");
  // 一般登入，帳號密碼驗證後，應該要做的事
  req.session.member = req.user;
  // 回覆給前端
  res.json({
    category: "auth",
    type: "login",
    code: "A0005",
    name: req.user.name,
    nickname: req.user.nickname,
    picture: req.user.picture,
  });
});

// 登出
router.post("/logout", (req, res, next) => {
  console.log("會員登出摟 !");
  req.session.member = null;
  res.sendStatus(202);
});

// 前端重新整理的時候查看有沒有登入過 (從 App.js 發來的)
router.post("/isLogin", (req, res, next) => {
  // console.log("isLogin-session", req.session);
  if (req.session.member) {
    res.send("有登入");
  }
  // res.sendStatus(202);
});

module.exports = router;
