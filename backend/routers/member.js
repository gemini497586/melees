const express = require("express");
const router = express.Router();
const { loginCheckMiddleware } = require("../middlewares/auth");
const path = require("path");
const connection = require("../utils/db");
const bcrypt = require("bcrypt");
const { uuid } = require("uuidv4");
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
    // console.log(memberId);
    const createDate = moment().format("YYYYMMDD");
    let result = await connection.queryAsync(
        "INSERT INTO box_save (member_id,box_ids,name,cal,create_at) VALUE (?)",
        [[memberId, req.body.saveId, req.body.name, req.body.cal, createDate]]
    );
    res.status(200).json({ message: "客製化便當收藏成功" });
});

router.post("/deletesavebox", async (req, res, next) => {
    let result = await connection.queryAsync(
        "DELETE FROM box_save WHERE id=?",
        [req.body.id]
    );
    res.status(200).json({ message: "客製化便當收刪除成功" });
});

router.get("/readsavebox", async (req, res, next) => {
    const memberId = req.session.member.id;
    // const memberId = 37;
    // console.log("read ", memberId);
    let result = await connection.queryAsync(
        "SELECT * FROM box_save WHERE member_id=? ORDER BY id DESC",
        [memberId]
    );

    let result2 = await connection.queryAsync(
        "SELECT id,name,inside_image FROM box"
    );
    res.json({ result2, result });
});

// 收藏商品
router.get("/readsaveproduct", async (req, res, next) => {
    const memberId = req.session.member.id;
    // const memberId = 37;

    let result = await connection.queryAsync(
        "SELECT * FROM product_save WHERE member_id=? ORDER BY id DESC",
        [memberId]
    );
    let productIds = result.map((v) => {
        return v.product_id;
    });
    // console.log(productIds);
    let result2 = await connection.queryAsync(
        "SELECT * FROM product WHERE id IN ?",
        [[productIds]]
    );
    res.json({ result, result2 });
});

router.get("/readsaverecipe", async (req, res, next) => {
    const memberId = req.session.member.id;
    // const memberId = 55;
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
                "b.id AS member_id, b.name AS member_name, b.picture AS member_pic, " +
                "(SELECT COUNT(user_id) FROM private_like WHERE a.id=private_id) AS like_qty, " +
                "(SELECT COUNT(user_id) FROM private_view WHERE a.id=private_id)AS view_qty " +
                "FROM private_recipe AS a INNER JOIN member AS b ON a.member_id = b.id " +
                "WHERE a.id IN ? " +
                "GROUP BY a.id ORDER BY a.id DESC",
            [[privateIds]]
        );
        result["private"] = private;
    }

    // 精選 -> 確認是否收藏
    // 有 -> 拿到該會員收藏的食譜id -> 再去撈出那些食譜的詳細內容
    let feature_save = await connection.queryAsync(
        "SELECT * FROM feature_save WHERE member_id=?",
        [[memberId]]
    );
    // console.log("feature_save ", feature_save);
    if (feature_save.length > 0) {
        let featureIds = feature_save.map((v) => {
            return v.feature_id;
        });
        // console.log("featureIds ", featureIds);
        let feature = await connection.queryAsync(
            "SELECT a.id AS listId, a.type_id, a.name AS listName, a.create_date, " +
                "b.id AS linkId, b.link, b.name AS linkName, b.img AS linkImg, " +
                "c.id AS imgid, c.feature_id AS imgfeatureid, GROUP_CONCAT(c.file_type ORDER BY c.file_type) AS featureimg, " +
                "(SELECT COUNT(member_id) FROM feature_like WHERE a.id=feature_id) AS like_qty ," +
                "(SELECT COUNT(member_id) FROM feature_view WHERE a.id=feature_id) AS view_qty " +
                "FROM feature_list AS a INNER JOIN feature_link AS b ON a.link_id=b.id INNER JOIN feature_img AS c ON a.id=c.feature_id " +
                "WHERE a.id IN ? GROUP BY a.id ORDER BY a.id DESC",
            [[featureIds]]
        );
        for (let i = 0; i < feature.length; i++) {
            feature[i].featureimg = feature[i].featureimg.split(",");
        }
        result["feature"] = feature;
    }

    // console.log(result.private.length === 0);
    // console.log(result.feature.length === 0);
    // 檢查兩種食譜是否都有被收藏
    // 沒有 -> 回傳訊息
    // 有 -> 回傳資料
    if (result.private.length === 0 && result.feature.length === 0) {
        return next({
            status: 400,
            message: "您好，目前尚未收藏任何食譜",
        });
    } else {
        res.json(result);
    }
});

// 食譜評論 Recipe Comment
router.post("/recipecomment/read", async (req, res, next) => {
  // L84 被註解了
  let result = await connection.queryAsync(
    "SELECT private_comment.*, private_recipe.picture, private_recipe.star_rate AS recipe_star_rate, private_recipe.name FROM private_comment LEFT JOIN private_recipe ON private_comment.private_id = private_recipe.id WHERE private_comment.member_id=?",
    // [req.session.member.id]
    [37] // 僅測試用
  );
  res.json(result);
});

router.post("/recipecomment/modal/read", async (req, res, next) => {
  console.log(req.body);
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

  let recipe_like = await connection.queryAsync(
    "SELECT count(*) AS count FROM private_like WHERE private_id=?",
    [req.body.recipe_id]
    // [120] // 僅測試用
  );

  let recipe_view = await connection.queryAsync(
    "SELECT count(*) AS count FROM private_view WHERE private_id=?",
    [req.body.recipe_id]
    // [119] // 僅測試用
  );

  let author_avatar = await connection.queryAsync(
    "SELECT picture FROM member WHERE id=?",
    [req.session.member.id]
    // [38] // 僅測試用
  );

  // console.log('like', like);
  // console.log('save', save);
  // console.log('recipe_like', recipe_like);
  // console.log('recipe_view', recipe_view);

  // 僅 某一特定食譜評論 --> 用 id 去篩選
  let newResult = {
    member_avatar: req.session.member.picture,
    member_name: req.session.member.name,
    // member_star_rate: 4, --XXX
    member_like: like.length > 0 ? true : false,
    member_save: save.length > 0 ? true : false,
    recipe_author_avatar: author_avatar[0].picture,
    recipe_like: recipe_like[0].count,
    recipe_view: recipe_view[0].count,
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

router.get("/", (req, res, next) => {
    res.send("Hello with member center");
});

module.exports = router;
