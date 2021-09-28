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
const passwordValidation = [
  // 密碼驗證 --> 1.不為空值  2.密碼與確認密碼是否一致  3.min: 6; max: 12;
  body("password")
    .isLength({ min: 6, max: 12 })
    .withMessage("密碼長度為6-12字元"),
  body("rePassword")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("密碼驗證不一致"),
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
      console.log(error);
      return res
        .status(400)
        .json({ field: error[0].param, message: error[0].msg });
    }

    // 確認資料是否有正確取得
    console.log("post-editinfo req.body: ", req.body);
    console.log("post-editinfo req.file: ", req.file);

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

    console.log("存入資料庫的內容：", result);
    res.status(200).json({ message: "會員資料更新成功" });
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

    // 更新密碼存入資料庫
    let result = await connection.queryAsync(
      "UPDATE member SET password = ? WHERE id = ?",
      [await bcrypt.hash(req.body.password, 10), memberId]
    );

    console.log("result: ", result);
    res.status(200).json({ message: "密碼更新成功" });
  }
);

// 收藏便當
router.post("/savebox", async (req, res, next) => {
  // 確認資料是否拿到
  // console.log(req.body);
  // 確認是否拿到會員id
  const memberId = req.session.member.id;
  const createDate = moment().format("YYYYMMDD");
  let result = await connection.queryAsync(
    "INSERT INTO box_save (member_id,box_ids,name,cal,create_at) VALUE (?)",
    [[memberId, req.body.saveId, req.body.name, req.body.cal, createDate]]
  );
  res.json();
});

router.post("/deletesavebox", async (req, res, next) => {
  let result = await connection.queryAsync("DELETE FROM box_save WHERE id=?", [
    [req.body.id],
  ]);
  res.json();
});

router.get("/readsavebox", async (req, res, next) => {
  const memberId = req.session.member.id;
  // const memberId = 37;
  let result = await connection.queryAsync(
    "SELECT * FROM box_save WHERE member_id=? ORDER BY id DESC",
    [memberId]
  );
  let result2 = await connection.queryAsync(
    "SELECT id,name,inside_image FROM box"
  );
  res.json({ result2, result });
});

router.get("/readsaveproduct", async (req, res, next) => {
  const memberId = req.session.member.id;
  // const memberId = 37;

  let result = await connection.queryAsync(
    "SELECT * FROM product_save WHERE member_id=? ORDER BY id DESC",
    [[memberId]]
  );
  let productIds = result.map((v) => {
    return v.product_id;
  });
  // console.log(productIds);
  let result2 = await connection.queryAsync(
    "SELECT id,category,image,name,price FROM product WHERE id IN ?",
    [[productIds]]
  );
  res.json({ result, result2 });
});

// 食譜評論 Recipe Comment
router.post("/recipecomment/read", async (req, res, next) => {
  // L83 被註解了
  let result = await connection.queryAsync(
    "SELECT private_comment.id, private_comment.member_id, private_comment.comment, private_comment.comment_time, private_comment.star_rate AS member_star_rate, private_comment.private_id AS recipe_id, private_recipe.picture AS recipe_img, private_recipe.star_rate AS recipe_star_rate, private_recipe.name AS recipe_name FROM private_comment LEFT JOIN private_recipe ON private_comment.private_id = private_recipe.id WHERE private_comment.member_id = ?",
    [req.session.member.id]
    // [1] // 僅測試用
  );
  // private_comment.id,
  // private_comment.member_id,
  // private_comment.comment,
  // private_comment.comment_time,
  // private_comment.private_id AS recipe_id,
  // private_recipe.name AS recipe_name,

  // private_comment.star_rate AS member_star_rate,

  res.json(result);
});

router.post("/recipecomment/modal/read", async (req, res, next) => {
  console.log('recipecomment modal read', req.body);
  // req.body = { recipe_id: XX } VVVVV

  let like = await connection.queryAsync(
    "SELECT * FROM private_like WHERE user_id=? AND private_id=?",
    [req.session.member.id, req.body.recipe_id]
    // [37, 120] // 僅測試用
  );

  let save = await connection.queryAsync(
    "SELECT * FROM private_save WHERE user_id=? AND private_id=?",
    [req.session.member.id, req.body.recipe_id]
    // [37, 120] // 僅測試用
  );

  let like_qty = await connection.queryAsync(
    "SELECT count(*) AS count FROM private_like WHERE private_id=?",
    [req.body.recipe_id]
    // [120] // 僅測試用
  );

  let view_qty = await connection.queryAsync(
    "SELECT count(*) AS count FROM private_view WHERE private_id=?",
    [req.body.recipe_id]
    // [119] // 僅測試用
  );

  let author_id = await connection.queryAsync(
    "SELECT member_id FROM private_recipe WHERE id=?",
    [req.body.recipe_id]
    // [38] // 僅測試用
  );
  
  let author_avatar = await connection.queryAsync(
    "SELECT picture FROM member WHERE id=?",
    [author_id[0].member_id]
    // [38] // 僅測試用
  );

  // console.log('like', like);
  // console.log('save', save);
  // console.log('like_qty', like_qty);
  // console.log('view_qty', view_qty);

  // 僅 某一特定食譜評論 --> 用 id 去篩選
  let newResult = {
    member_avatar: req.session.member.picture,
    member_name: req.session.member.name,
    member_like: like.length > 0 ? true : false,
    member_save: save.length > 0 ? true : false,
    recipe_author_avatar: author_avatar[0].picture,
    like_qty: like_qty[0].count,
    view_qty: view_qty[0].count,
  };

  res.json(newResult);
});

router.post("/recipecomment/modal/edit", async (req, res, next) => {
  console.log("try to update", req.body);

  let result = await connection.queryAsync(
    "UPDATE private_comment SET comment = ?, star_rate = ?, comment_time = ? WHERE id = ?",
    [
      req.body.newComment,
      req.body.starScore,
      moment().format("YYYYMMDD"),
      req.body.id,
    ]
  );

  res.status(200).json({ message: "Update successfully!" });
});

router.post("/recipecomment/modal/delete", async (req, res, next) => {
  console.log("try to delete", req.body);

  let result = await connection.queryAsync(
    "DELETE FROM private_comment WHERE id = ?",
    [req.body.id]
  );

  res.status(200).json({ message: "Delete successfully!" });
});

router.post("/recipecomment/insert", async (req, res, next) => {
  console.log("try to insert");

  // insert 1個Row --> VALUES(?), Data = [[Row1]]
  // insert N個Row --> VALUES ? , Data = [[[Row1], [Row2], [Row3], [Row4], [Row5]]]

  // let sqlComment =
  //   "INSERT INTO private_comment (private_id, member_id, comment, star_rate, comment_time) VALUES ?";
  // let insertComment = [
  // [1, 1, "之前的蔥雞湯是我家人的最愛，我們每個星期都會做蔥雞湯來吃。現在又學會了蒜頭雞。太棒了！", 3, "2021-09-01"],
  // [1, 2, "這裡也變冷了，看到這個太開心，做法也不難，可以來做一下暖個胃了", 3, "2021-09-02"],
  // [1, 3, "剛煮好，蒜頭沒有炒著很酥香，但是一樣超好吃!!!太感謝了~~~", 4, "2021-09-03"],
  // [1, 4, "學到了明天就買來做做看保證好吃的耶謝謝囉，感覺好溫暖喔", 4, "2021-09-04"],
  // [1, 5, "這絕對好吃的啊！", 5, "2021-09-05"],
  // [1, 1, "你的教學,簡易好操作,說明清楚簡單", 5, "2021-09-06"],
  // [1, 2, "我昨天貼給我媽媽看，他今天就煮，今天晚餐吃，超級好吃~~終於可以吃到不同口味的雞湯!!", 5, "2021-09-07"],
  // [1, 3, "感謝您的教學!!!簡單料理卻美味十足!!!", 4, "2021-09-08"],
  // [1, 4, "感謝分享，用一般的電鍋類(如大同，聲寶)燉1小時完全是另一個層次，首先蒜頭化了，化成末狀完全融入湯內。湯頭內繁星點點(蒜頭化開而成的蒜末)味道才是棒極了。", 5, "2021-09-09"],
  // [1, 5, "看似簡單，卻是滿滿營養且好濃郁！最近天氣濕冷冷～家人容易感冒，蒜頭雞湯真的是提身免疫力的好方法！", 5, "2021-09-10"],
  // [1, 1, "剛做完，第一次煮雞湯，很簡單又超好喝，我還加了澳洲馬鈴薯進去也超搭", 5, "2021-09-11"],
  // [1, 2, "推，越簡單越好，這集就感覺很容易在家做，而且冬天很讚", 5, "2021-09-12"],
  // [1, 3, "每個步驟講解的很清楚仔細，好像好好吃的感覺，改天煮來吃", 4, "2021-09-13"],
  // ];
  // let resultComment = await connection.queryAsync(sqlComment, [insertComment]);
  // console.log(resultComment);

  // let sqlRecipe = "INSERT INTO private_recipe (picture, name, intro, qty, create_date, member_id, valid, star_rate) VALUES ? "
  // let insertRecipe = [
  //   ['015d879e-d10e-48b4-98ad-07818d33fc18.jpg', '蒜頭雞湯', '冬天的時候，我很喜歡在家裡煮一碗大鍋的湯在餐桌上跟家人一起分享，是件很幸福的事除了蔥雞湯之外，這道 #蒜頭雞湯 也是我很喜歡的在餐館喝到的蒜頭雞湯，蒜頭都會先炸過，把蒜頭的香氣提出來但在家裡，想吃到這樣香氣的蒜頭其實不用那麼麻煩把蒜頭跟雞肉多炒一下，也能呈現相同的感受！做料理，總是希望可以用簡單的方式呈現最好的味...', 4, '2021-08-18', 5, 1, 4.2],
  //   ['3b43f07f-1754-4419-9e3b-600c394b3b3a.jpg', '鹽酥雞', '今天來分享大人小孩都喜歡的鹽酥雞，外酥肉多汁的鹽酥雞絕對完勝你家巷口的鹽酥雞攤。自己動手做的最安心，只要掌握一點小技巧，你也可以快速上手，有興趣的朋友就趁著假日來試試看吧!', 2, '2021-09-18', 5, 1, 3],
  // ];
  // let resultRecipe = await connection.queryAsync(sqlRecipe, [insertRecipe]);
  // console.log(resultRecipe);
  res.status(200).json({ message: "successful!!" });
});

router.get("/", (req, res, next) => {
  res.send("Hello with member center");
});

module.exports = router;
