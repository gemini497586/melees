const express = require("express");
const router = express.Router();
const { loginCheckMiddleware } = require("../middlewares/auth");
const path = require("path");
const connection = require("../utils/db");
const bcrypt = require("bcrypt");
const { v4 } = require("uuid");
const moment = require("moment");

// 資料驗證
const { body, validationResult } = require("express-validator");
const infoValidation = [
  // Email驗證 --> 1.不為空值  2.檢查Email格式  3.max: 100;
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
const passwordValidation = [
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
];

// multer 用來處理 From-data (Content-Type: multipart/form-data)
const multer = require("multer");
const { route } = require("./search");
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
    console.log(file);
    if (
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/png" &&
      file.mimetype !== "image/jpg"
    ) {
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

// 先檢查是否已登入
router.use(loginCheckMiddleware);

// 會員資料修改 --> 進入編輯頁面 --> 需要撈資料庫
router.get("/editinfo", async (req, res, next) => {
  let memberId = req.session.member.id;
  // let memberId = 37;
  let memberInfo = await connection.queryAsync(
    "SELECT * FROM member WHERE id = ?",
    [memberId]
  );
  memberInfo = memberInfo[0];
  let responeMemberInfo = {
    picture: memberInfo.picture,
    name: memberInfo.name,
    gender: memberInfo.gender,
    nickname: memberInfo.nickname,
    birthday: memberInfo.birthday,
    cellphone: memberInfo.phone,
    email: memberInfo.email,
    address: memberInfo.address,
  };
  res.json(responeMemberInfo);
});

// 會員資料修改 --> 表單送出 --> 需要更新資料庫
router.post(
  "/editinfo",
  uploader.single("picture"),
  infoValidation,
  async (req, res, next) => {
    let memberId = req.session.member.id;
    // let memberId = 37;
    // 套件回覆的驗證結果
    const dataValidationResult = validationResult(req);
    if (!dataValidationResult.isEmpty()) {
      let error = dataValidationResult.array();
      // console.log(error);

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
      return res
        .status(400)
        .json({ category: "auth", type: errors[0].param, code: errors[0].msg });
    }

    // 確認資料是否有正確取得
    // console.log("editinfo req.body: ", req.body);
    // console.log("editinfo req.file: ", req.file);

    let filename = req.file ? "/" + req.file.filename : "";
    let sql =
      "UPDATE member SET name = ?, gender = ?, nickname = ?, birthday = ?, phone = ?, email = ?, address = ?";
    let updateData = [
      req.body.name,
      req.body.gender,
      req.body.nickname,
      req.body.birthday,
      req.body.cellphone,
      req.body.email,
      req.body.address,
    ];
    // 判斷使用者更新大頭貼時，更新 picture 欄位
    if (filename) {
      sql += ", picture = ?";
      updateData.push(filename);
    }

    sql += " WHERE id = ?";
    updateData.push(memberId);
    let result = await connection.queryAsync(sql, updateData);
    console.log("editinfo 存入資料庫的內容：", result);

    // 更新會員資料後，同步更新session資料
    let member = await connection.queryAsync(
      "SELECT * FROM member WHERE id = ?",
      [memberId]
    );
    member = member[0];

    let returnMember = {
      id: member.id,
      name: member.name,
      nickname: member.nickname,
      picture: member.picture,
      email: member.email,
    };
    req.session.member = returnMember;
    // console.log('更新會員資料後，同步更新session資料', req.session.member);

    res.status(200).json({
      category: "auth",
      type: "editMemberInfo",
      code: "A0001",
    });
  }
);

// 會員密碼變更
router.post(
  "/editpwd",
  // passwordValidation --> 密碼格式要符合 + 確定新密碼一致
  passwordValidation,
  async (req, res, next) => {
    let memberId = req.session.member.id;
    // let memberId = 37;
    // 舊密碼跟資料庫密碼比對，錯誤回覆400
    let member = await connection.queryAsync(
      "SELECT password FROM member WHERE id = ?",
      [memberId]
    );
    // console.log("member[0].password: ", member[0].password);
    // console.log("req.body.oldPassword: ", req.body.oldPassword);
    let confirmResult = await bcrypt.compare(
      req.body.oldPassword,
      member[0].password
    );
    if (!confirmResult) {
      return next({
        status: 400,
        category: "auth",
        type: "oldPassword",
        code: "C0303",
      });
    }

    // 新密碼 !== 舊密碼
    if (req.body.oldPassword === req.body.password) {
      return next({
        status: 400,
        category: "auth",
        type: "password",
        code: "C0204",
      });
    }

    // 更新密碼存入資料庫
    let result = await connection.queryAsync(
      "UPDATE member SET password = ? WHERE id = ?",
      [await bcrypt.hash(req.body.password, 10), memberId]
    );

    console.log("result: ", result);
    res.status(200).json({
      category: "auth",
      type: "password",
      code: "A0002",
    });
  }
);

// 收藏便當
router.post("/savebox", async (req, res, next) => {
  // 確認資料是否拿到
  // console.log(req.body);
  // 確認是否拿到會員id
  const memberId = req.session.member.id;
  // console.log(memberId);
  const createDate = moment().format("YYYYMMDD");
  let result = await connection.queryAsync(
    "INSERT INTO box_save (member_id,box_ids,name,cal,create_at) VALUE (?)",
    [[memberId, req.body.saveId, req.body.name, req.body.cal, createDate]]
  );
  res.status(200).json({ message: "客製化便當收藏成功" });
});

router.post("/deletesavebox", async (req, res, next) => {
  let result = await connection.queryAsync("DELETE FROM box_save WHERE id=?", [
    req.body.id,
  ]);
  res.status(200).json({ message: "客製化便當收刪除成功" });
});

router.get("/readsavebox", async (req, res, next) => {
  const memberId = req.session.member.id;
  // const memberId = 1;

  let result = await connection.queryAsync(
    "SELECT * FROM box_save WHERE member_id=? ORDER BY id DESC",
    [memberId]
  );
  // 檢查是否有收藏
  if (result.length === 0) {
    res.json({ message: "您好，目前尚未收藏任何便當" });
  } else {
    let result2 = await connection.queryAsync(
      "SELECT id,name,inside_image FROM box"
    );
    res.json({ result, result2 });
  }
});

// 收藏商品
router.get("/readsaveproduct", async (req, res, next) => {
  const memberId = req.session.member.id;
  // const memberId = 1;

  let result = await connection.queryAsync(
    "SELECT * FROM product_save WHERE member_id=? ORDER BY id DESC",
    [memberId]
  );
  // 檢查是否有收藏
  if (result.length === 0) {
    res.json({ message: "您好，目前尚未收藏任何商品" });
  } else {
    let productIds = result.map((v) => {
      return v.product_id;
    });
    let result2 = await connection.queryAsync(
      "SELECT * FROM product WHERE id IN ?",
      [[productIds]]
    );
    res.json({ result, result2 });
  }
});

router.get("/readsaverecipe", async (req, res, next) => {
  const memberId = req.session.member.id;
  // const memberId = 1;
  let result = { private: [], feature: [] };

  // 私藏 -> 確認是否收藏
  // 有 -> 拿到該會員收藏的食譜id -> 再去撈出那些食譜的詳細內容
  let private_save = await connection.queryAsync(
    "SELECT * FROM private_save WHERE user_id=? ORDER BY id DESC",
    [memberId]
  );
  // console.log("private_save ", private_save);
  if (private_save.length > 0) {
    let privateIds = private_save.map((v) => {
      return v.private_id;
    });
    // console.log("privateIds ", privateIds);
    let private = await connection.queryAsync(
      "SELECT a.id, a.picture, a.name, a.create_date, " +
        "b.id AS member_id, b.name AS member_name, b.nickname AS member_nickname, b.picture AS member_pic, " +
        "c.id AS saveId, " +
        "(SELECT COUNT(user_id) FROM private_like WHERE a.id=private_id) AS like_qty, " +
        "(SELECT COUNT(user_id) FROM private_view WHERE a.id=private_id)AS view_qty " +
        "FROM private_recipe AS a INNER JOIN member AS b ON a.member_id = b.id INNER JOIN private_save AS c ON a.id = c.private_id " +
        "WHERE a.id IN ? " +
        "GROUP BY a.id ORDER BY saveId DESC",
      [[privateIds]]
    );
    private = private.map((v) => {
      v["type"] = 1;
      return v;
    });
    result["private"] = private;
  }

  // 精選 -> 確認是否收藏
  // 有 -> 拿到該會員收藏的食譜id -> 再去撈出那些食譜的詳細內容
  let feature_save = await connection.queryAsync(
    "SELECT * FROM feature_save WHERE member_id=?",
    [memberId]
  );
  // console.log("feature_save ", feature_save);
  if (feature_save.length > 0) {
    let featureIds = feature_save.map((v) => {
      return v.feature_id;
    });
    // console.log("featureIds ", featureIds);
    let feature = await connection.queryAsync(
      "SELECT a.id , a.type_id, a.name, a.create_date, " +
        "b.name AS linkName, b.img AS linkImg, " +
        "c.file_type AS picture, " +
        "d.id AS saveId, " +
        "(SELECT COUNT(member_id) FROM feature_like WHERE a.id=feature_id) AS like_qty ," +
        "(SELECT COUNT(member_id) FROM feature_view WHERE a.id=feature_id) AS view_qty " +
        "FROM feature_list AS a INNER JOIN feature_link AS b ON a.link_id=b.id INNER JOIN feature_img AS c ON a.id=c.feature_id INNER JOIN feature_save AS d ON a.id=d.feature_id " +
        "WHERE a.id IN ? GROUP BY a.id ORDER BY a.id DESC",
      [[featureIds]]
    );
    feature = feature.map((v) => {
      v["type"] = 2;
      return v;
    });
    result["feature"] = feature;
  }

  // 檢查兩種食譜是否都有被收藏
  // 沒有 -> 回傳訊息
  // 有 -> 回傳資料
  if (result.private.length === 0 && result.feature.length === 0) {
    res.json({ message: "您好，目前尚未收藏任何食譜" });
  } else {
    res.json(result);
  }
});

// 食譜評論 Recipe Comment
router.post("/recipecomment/read", async (req, res, next) => {
  // 左邊資料表 private_comment LEFT JOIN 右邊資料表 private_recipe
  let result = await connection.queryAsync(
    "SELECT " +
      "private_comment.id, private_comment.member_id, private_comment.comment, private_comment.comment_time, private_comment.star_rate AS member_star_rate, private_comment.private_id AS recipe_id, " +
      "private_recipe.picture AS recipe_img, private_recipe.star_rate AS recipe_star_rate, private_recipe.name AS recipe_name " +
      "FROM private_comment LEFT JOIN private_recipe ON private_comment.private_id = private_recipe.id " +
      "WHERE private_comment.member_id = ?",
    [req.session.member.id]
    // [1] // 僅測試用
  );

  // 依據 食譜評論時間 由新至舊 排序
  result = [...result].sort(
    (a, b) => moment(b.comment_time) - moment(a.comment_time)
  );
  res.json(result);
});

router.post("/recipecomment/modal/read", async (req, res, next) => {
  // 僅需要 特定一個食譜評論的詳細資料 --> 用 id 去篩選
  // req.body = { recipe_id: 1 }
  console.log("recipecomment modal read", req.body);

  let like = await connection.queryAsync(
    "SELECT * FROM private_like WHERE user_id=? AND private_id=?",
    [req.session.member.id, req.body.recipe_id]
  );

  let save = await connection.queryAsync(
    "SELECT * FROM private_save WHERE user_id=? AND private_id=?",
    [req.session.member.id, req.body.recipe_id]
  );

  let like_qty = await connection.queryAsync(
    "SELECT count(*) AS count FROM private_like WHERE private_id=?",
    [req.body.recipe_id]
  );

  let view_qty = await connection.queryAsync(
    "SELECT count(*) AS count FROM private_view WHERE private_id=?",
    [req.body.recipe_id]
  );

  let author_id = await connection.queryAsync(
    "SELECT member_id FROM private_recipe WHERE id=?",
    [req.body.recipe_id]
  );

  let author_avatar = await connection.queryAsync(
    "SELECT picture FROM member WHERE id=?",
    [author_id[0].member_id]
  );

  let newResult = {
    member_avatar: req.session.member.picture,
    member_name: req.session.member.name,
    member_nickname: req.session.member.nickname,
    member_like: like.length > 0 ? true : false,
    member_save: save.length > 0 ? true : false,
    recipe_author_avatar: author_avatar[0].picture,
    like_qty: like_qty[0].count,
    view_qty: view_qty[0].count,
  };

  res.json(newResult);
});

router.post("/recipecomment/modal/edit", async (req, res, next) => {
  console.log("update recipecomment", req.body);

  // 1. 評論與評分都沒有更新 --> next()丟錯誤訊息
  if (!req.body.newComment && !req.body.starScore) {
    return next({
      status: 400,
      category: "recipecomment",
      code: "B0101",
    });
  }

  // 2. 評論或評分有更新 --> 接續執行MySQL操作
  let sql = "UPDATE private_comment SET";
  let updateData = [];

  // 2-1. 評論有更新，新增sql語法，更新comment欄位
  if (req.body.newComment) {
    sql += " comment = ?,";
    updateData.push(req.body.newComment);
  }

  // 2-2. 評分有更新，新增sql語法，更新star_rate欄位
  if (req.body.starScore) {
    sql += " star_rate = ?,";
    updateData.push(req.body.starScore);
  }

  // 2-3. 完成sql語法、整理資料
  sql += " comment_time = ? WHERE id = ? AND member_id =?";
  updateData.push(
    moment().format("YYYYMMDD"),
    req.body.id,
    req.session.member.id
  );

  // 3. 執行 --> 資料庫更新
  try {
    // 3-1. private_comment 更新 該食譜評論
    let result_comment = await connection.queryAsync(sql, updateData);
    console.log("updated result_comment: ", result_comment);

    // 3-2. 將該食譜的星星數做加總 / 該食譜的總評分人數
    let result = await connection.queryAsync(
      "SELECT * FROM private_comment WHERE private_id = ?",
      [req.body.recipe_id]
    );

    // 該食譜 新的總評分人數
    let totalNum = result.length;

    // 該食譜 新的總星星數
    let totalStar = result.reduce((acc, value) => {
      return value.star_rate + acc;
    }, 0);

    // 該食譜 新的平均評分
    let averageStar = (totalStar / totalNum).toFixed(1);

    // 寫回 private_recipe 的 star_rate
    let result_recipe = await connection.queryAsync(
      "UPDATE private_recipe SET star_rate = ? WHERE id = ?",
      [averageStar, req.body.recipe_id]
    );
    console.log("updated result_recipe: ", result_recipe);

    res.status(200).json({
      category: "recipecomment",
      code: "A0001",
    });
  } catch (err) {
    console.error("recipecomment Error: ", err);
    next({
      status: 400,
      category: "recipecomment",
      code: "B0102",
    });
  }
});

router.post("/recipecomment/modal/delete", async (req, res, next) => {
  console.log("delete recipecomment", req.body);

  // 測試用 未收到欲刪除的食譜評論id
  // req.body.id = null;

  // 未收到欲刪除的食譜評論id --> next()丟錯誤訊息
  if (!req.body.id) {
    return next({
      status: 400,
      category: "recipecomment",
      code: "B0201",
    });
  }

  // let result = await connection.queryAsync(
  //   "DELETE FROM private_comment WHERE id = ? AND member_id = ?",
  //   [req.body.id, req.session.member.id]
  // );

  res.status(200).json({ category: "recipecomment", code: "A0004" });
});

router.get("/", (req, res, next) => {
  res.send("Hello with member center");
});

module.exports = router;
