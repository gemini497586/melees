const express = require("express");
const connection = require("../utils/db");
const router = express.Router();
const moment = require("moment");
const { v4 } = require("uuid");
// nodejs 的物件
const path = require("path");
const { loginCheckMiddleware } = require("../middlewares/auth");

// multer 用來處理 Form-data (Content-Type: multipart/form-data)
const multer = require("multer");
// 為了上傳，需要告訴他上傳的檔案存在哪裡
// 通常存在硬碟
const storage = multer.diskStorage({
  // 設定儲存的目的地
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../", "images", "private"));
  },
  filename: function (req, file, cb) {
    // 檔案命名
    // 怎麼取新名字 ?
    let ext = file.originalname.split(".").pop();
    console.log(`${v4()}.${ext}`);
    cb(null, `${v4()}.${ext}`);
  },
});

// 圖片驗證
const uploader = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    console.log("判斷副檔名", file.mimetype);
    // 判斷檔案的型態不是這三種的話，就 error
    if (
      file.mimetype !== "image/jpg" && 
      file.mimetype !== "image/png" && 
      file.mimetype !== "image/jpeg") 
      {
      cb(new Error("不接受的檔案型態"), false);
    }
    cb(null, true);
  },
  limits: {
    // 1MB
    // 1024 byte * 1024 byte = 1048576 byte ~= 1MB
    fileSize: 1024 * 1024,
  },
});

// 抓食譜的資料 (食譜首頁)
router.get("/index", async function (req, res, next) {
  const userId = req.session.member ? req.session.member.id : ""
  
  let recipe = "SELECT * FROM private_recipe ORDER BY id DESC";
  let recipeInfo = await connection.queryAsync(recipe);
  let recipeList = []
  recipeInfo.map((value) => {recipeList.push(value.id)})


  let member = "SELECT id, nickname, picture FROM member"
  let memResult = await connection.queryAsync(member)

  let like = "SELECT private_id, count(*) as count FROM private_like GROUP BY private_id";
  let likeResult = await connection.queryAsync(like);
  // 做一個空陣列
  let likeList = []
  likeResult.map((value) => {likeList.push(value.private_id)})
  let subLike = recipeList.filter((e) => {return likeList.indexOf(e) === -1})
  subLike.forEach((value) => {likeResult.push({private_id: value,count: 0,},)})
  
  let view = "SELECT private_id, count(*) as count FROM private_view GROUP BY private_id";
  let viewResult = await connection.queryAsync(view);
  // 做一個空陣列
  let viewList = []
  viewResult.map((value) => {viewList.push(value.private_id)})
  let subView = recipeList.filter((e) => {return viewList.indexOf(e) === -1})
  subView.forEach((value) => {viewResult.push({private_id: value,count: 0,},)})
  

  let comment = "SELECT private_id, count(*) as count FROM private_comment GROUP BY private_id";
  let commentResult = await connection.queryAsync(comment);
  // 做一個空陣列
  let commentList = []
  commentResult.map((value) => {commentList.push(value.private_id)})
  let subComment = recipeList.filter((e) => {return commentList.indexOf(e) === -1})
  subComment.forEach((value) => {commentResult.push({private_id: value,count: 0,},)})

  // 選取使用者有沒有對這個食譜按收藏
  let saveSql = "SELECT * FROM private_save WHERE user_id = ?";
  let result4 = await connection.queryAsync(saveSql, [userId]);

  // 選取使用者有沒有對這個食譜按讚
  let likeSql = "SELECT * FROM private_like WHERE user_id = ?";
  let result5 = await connection.queryAsync(likeSql, [userId]);

  res.json({ recipeInfo, memResult, likeResult, viewResult, commentResult, result4, result5 });
});

// 進入食譜的資料 (內頁)
router.get("/index/recipe/:id", async function (req, res, next) {
  const userId = req.session.member ? req.session.member.id : ""
  
  let sql = "SELECT * FROM private_recipe WHERE id = ?";
  let result = await connection.queryAsync(sql, [req.params.id]);

  let member = "SELECT * FROM member WHERE id = ?"
  let memResult = await connection.queryAsync(member, [result[0].member_id])

  let sql2 = "SELECT * FROM private_follow WHERE user_id = ? AND private_id = ?";
  let follow = await connection.queryAsync(sql2, [userId, req.params.id]);
  let followed = follow.length > 0;

  let sql3 = "SELECT * FROM private_like WHERE user_id = ? AND private_id = ?";
  let like = await connection.queryAsync(sql3, [userId, req.params.id]);
  let liked = like.length > 0;

  let sql4 = "SELECT * FROM private_save WHERE user_id = ? AND private_id = ?";
  let save = await connection.queryAsync(sql4, [userId, req.params.id]);
  let saved = save.length > 0;

  res.json({ result, memResult, followed, liked, saved });
});

// 追蹤的新增或刪除
router.get("/add-follow/:id", async function (req, res, next) {
  const userId = req.session.member.id
  let sql = "INSERT INTO private_follow (private_id, user_id) VALUES (?, ?)";
  let follow = await connection.queryAsync(sql, [req.params.id, userId]);

  res.json(follow);
});
router.get("/remove-follow/:id", async function (req, res, next) {
  const userId = req.session.member.id
  let sql = "DELETE FROM private_follow WHERE private_id = ? AND user_id = ?";
  let follow = await connection.queryAsync(sql, [req.params.id, userId]);

  res.json(follow);
});

// 按讚的新增或刪除
router.get("/add-like/:id", async function (req, res, next) {
  const userId = req.session.member.id

  // let memberId = 5;
  let sql = "INSERT INTO private_like (private_id, user_id) VALUES (?, ?)";
  let like = await connection.queryAsync(sql, [req.params.id, userId]);

  res.json(like);
});
router.get("/remove-like/:id", async function (req, res, next) {
  const userId = req.session.member.id

  // let memberId = 5;
  let sql = "DELETE FROM private_like WHERE private_id = ? AND user_id = ?";
  let like = await connection.queryAsync(sql, [req.params.id, userId]);

  res.json(like);
});

// 按收藏的新增或刪除
router.get("/add-save/:id", async function (req, res, next) {
  const userId = req.session.member.id
  // let memberId = 5;
  let sql = "INSERT INTO private_save (private_id, user_id) VALUES (?, ?)";
  let save = await connection.queryAsync(sql, [req.params.id, userId]);

  res.json(save);
});
router.get("/remove-save/:id", async function (req, res, next) {
  const userId = req.session.member.id
  // let memberId = 5;
  let sql = "DELETE FROM private_save WHERE private_id = ? AND user_id = ?";
  let save = await connection.queryAsync(sql, [req.params.id, userId]);

  res.json(save);
});

// 抓取食材的資料
router.get("/ingred/:id", async function (req, res, next) {
  let sql = "SELECT * FROM private_ingred WHERE private_id = ?";
  let data = await connection.queryAsync(sql, [req.params.id]);
  console.log(data);
  res.json(data);
});

// 抓取步驟的資料
router.get("/steps/:id", async function (req, res, next) {
  let sql = "SELECT * FROM private_step WHERE private_id = ?";
  let data = await connection.queryAsync(sql, [req.params.id]);
  res.json(data);
});

// 抓取 tag 的資料
router.get("/tags/:id", async function (req, res, next) {
  let sql = "SELECT * FROM private_tags WHERE private_id = ?";
  let data = await connection.queryAsync(sql, [req.params.id]);
  res.json(data);
});

// 抓取目前食譜的評論
router.get("/comment/:id", async function (req, res, next) {
  let sql = "SELECT * FROM private_comment WHERE private_id = ?";
  let result = await connection.queryAsync(sql, [req.params.id]);
  let member = "SELECT * FROM member"
  let memResult = await connection.queryAsync(member)
  res.json({result, memResult});
});

// 更新瀏覽數
router.get("/addview/:id", async function (req, res, next) {
  const userId = req.session.member ? req.session.member.id : ""
  let sql = "INSERT INTO private_view (private_id, user_id) VALUES (?, ?)";
  let data = await connection.queryAsync(sql, [req.params.id, userId]);
  res.send("success");
});

// 編輯食譜，先去資料庫拿資料
router.get("/edit/get-data/:id", async function(req, res, next) {
  console.log("123")
  // const userId = req.session.member.id
  let sql = "SELECT * FROM private_recipe WHERE id = ?"
  let recipe = await connection.queryAsync(sql, [req.params.id])

  let sql2 = "SELECT * FROM private_ingred WHERE private_id = ?"
  let ingred = await connection.queryAsync(sql2, [req.params.id])

  let sql3 = "SELECT * FROM private_step WHERE private_id = ?"
  let steps = await connection.queryAsync(sql3, [req.params.id])
  console.log(recipe)
  console.log(ingred)
  res.json({recipe, ingred, steps})
})

// 編輯食譜，編輯後送資料到資料庫
router.post("/edit/post-data/:id", uploader.single("photo"), async function(req, res, next) {
  const filename = req.file ? req.file.filename : "";
  const name = req.body.name;
  const intro = req.body.intro;
  const qty = req.body.qty;
  const newIngred = JSON.parse(req.body.ingred);
  const newStep = JSON.parse(req.body.step);
  if(filename === "") {
    // 更新 private_recipe (沒有更改照片的)
    let sql = "UPDATE private_recipe SET name = ?, intro = ?, qty = ? WHERE id = ?"
    let result = await connection.queryAsync(sql, [name, intro, qty, req.params.id])
    console.log("執行沒有照片的")
  } else {
    // 更新 private_recipe (有更改照片的)
    let sql = "UPDATE private_recipe SET picture = ?, name = ?, intro = ?, qty = ? WHERE id = ?"
    let result = await connection.queryAsync(sql, [filename, name, intro, qty, req.params.id])
    console.log("執行有照片的")
  }


  // 先取出食材原本欄位
  let sql2 = "SELECT * FROM private_ingred WHERE private_id = ?"
  let oldIngred = await connection.queryAsync(sql2, [req.params.id])
  let oldIngredCount = oldIngred.length
  let newIngredCount = newIngred.length

  let ingredRow = oldIngredCount - newIngredCount
  // 如果 diff > 0 代表更新過後的欄位比較少
  if (ingredRow > 0) {
    let ingredRetain = oldIngred.slice(0, newIngredCount)
    let ingredRemove = oldIngred.slice(newIngredCount)

    // 更新食材到資料表
    newIngred.forEach(async (value, index) => {
      let ingredList = "UPDATE private_ingred SET ingred = ?, ingred_unit = ? WHERE id = ?"
      let ingredResult = await connection.queryAsync(ingredList, [value.ingred, value.ingred_unit, ingredRetain[index].id]);
    });

    // 刪除多餘的欄位
    ingredRemove.forEach(async (value, index) => {
      let sql = "DELETE FROM private_ingred WHERE id = ?"
      let test = await connection.queryAsync(sql, [value.id])
    })
  } else if (ingredRow < 0) {
    // 如果 diff < 0 代表更新過後的欄位比較多
    let ingredRetain = newIngred.slice(0, oldIngredCount)
    let ingredInsert = newIngred.slice(oldIngredCount)

    // 更新食材到資料表
    ingredRetain.forEach(async (value,index) => {
      let ingredList = "UPDATE private_ingred SET ingred = ?, ingred_unit = ? WHERE id = ?"
      let ingredResult = await connection.queryAsync(ingredList, [value.ingred, value.ingred_unit, ingredRetain[index].id]);
    })

    // 新增多的欄位
    ingredInsert.forEach(async (value, index) => {
      let sql = "INSERT INTO private_ingred (private_id, ingred, ingred_unit) VALUES (?)"
      let test = await connection.queryAsync(sql, [[req.params.id, value.ingred, value.ingred_unit]])
    })
  } else {
    // 更新食材到資料表
    newIngred.forEach(async (value, index) => {
      let ingredList = "UPDATE private_ingred SET ingred = ?, ingred_unit = ? WHERE id = ?"
      let ingredResult = await connection.queryAsync(ingredList, [value.ingred, value.ingred_unit, oldIngred[index].id]);
    });
  }
  
  
  // 取出步驟原本欄位
  let sql3 = "SELECT * FROM private_step WHERE private_id = ?"
  let oldStep = await connection.queryAsync(sql3, [req.params.id])
  let oldStepCount = oldStep.length
  let newStepCount = newStep.length

  let stepRow = oldStepCount - newStepCount
  if(stepRow > 0) {
    let stepRetain = oldStep.slice(0, newStepCount)
    let stepRemove = oldStep.slice(newStepCount)

    // 更新步驟到資料表
    newStep.forEach(async (value, index) => {
      let stepdList = "UPDATE private_step SET steps = ? WHERE id = ?"
      let stepResult = await connection.queryAsync(stepdList, [value.steps, stepRetain[index].id]);
    });

    // 刪除原本剩餘的步驟
    stepRemove.forEach(async (value, index) => {
      let sql = "DELETE FROM private_step WHERE id = ?"
      let test = await connection.queryAsync(sql, [value.id])
    })
  } else if (stepRow < 0) {
    let stepRetain = newStep.slice(0, oldStepCount)
    let stepInsert = newStep.slice(oldStepCount)

    // 更新食材到資料表
    stepRetain.forEach(async (value,index) => {
      let stepList = "UPDATE private_step SET steps = ? WHERE id = ?"
      let stepResult = await connection.queryAsync(stepList, [value.steps, stepRetain[index].id]);
    })

    // 新增多的欄位
    stepInsert.forEach(async (value, index) => {
      let sql = "INSERT INTO private_step (private_id, steps) VALUES (?)"
      let test = await connection.queryAsync(sql, [[req.params.id, value.steps]])
    })
  } else {
    // 更新食材到資料表
    newStep.forEach(async (value, index) => {
      let stepList = "UPDATE private_step SET steps = ? WHERE id = ?"
      let ingredResult = await connection.queryAsync(stepList, [value.steps, oldStep[index].id]);
    });
  }
  
  
    
    

})
// 上傳食譜
// 我只要上傳一張圖片，要加上 single
// req.body 代表前端的 request 裡面全部的資料
router.post("/upload/main", uploader.single("photo"), async function (req, res, next) {
  const memberId = req.session.member.id
  const filename = req.file ? req.file.filename : "";
  const name = req.body.name;
  const intro = req.body.intro;
  const qty = req.body.qty;
  const ingred = JSON.parse(req.body.ingred);
  const steps = JSON.parse(req.body.steps);
  const time = moment().format("YYYY-MM-DD");
  const star_rate = 0;
  const valid = 1;

  // 新增到 private_recipe 資料表裡
  let sql = "INSERT INTO private_recipe (picture, name, intro, qty, member_id, create_date, star_rate, valid) VALUES (?)";
  let data = await connection.queryAsync(sql, [[filename, name, intro, qty, memberId, time, star_rate, valid]]);

  // 取得剛新增的食譜 id
  let sql2 = "SELECT * FROM private_recipe ORDER BY id DESC LIMIT 1";
  let lastId = await connection.queryAsync(sql2);
  console.log("最後一次ID", lastId[0].id);

  // 新增食材到資料表
  ingred.forEach(async (value) => {
    let ingredList = "INSERT INTO private_ingred (private_id, ingred, ingred_unit) VALUES (?)";
    let ingredResult = await connection.queryAsync(ingredList, [[lastId[0].id, value.ingred, value.ingred_unit]]);
  });

  // 新增步驟到資料表
  steps.forEach(async (value) => {
    let stepList = "INSERT INTO private_step (private_id, steps) VALUES (?)";
    let stepResult = await connection.queryAsync(stepList, [[lastId[0].id, value.step]]);
  });

  res.json(data);
});

// 上傳留言及評分部分
router.post("/comment/upload/:id", async function (req, res, next) {
  const memberId = req.session.member.id
  const comment = req.body.comment;
  const star_rate = req.body.starValue;
  const comment_time = moment().format("YYYY/MM/DD");
  // const star_rate = 3;

  // 新增到 private_recipe 資料表裡
  let sql = "INSERT INTO private_comment (private_id, member_id, comment, star_rate, comment_time) VALUES (?)";
  let data = await connection.queryAsync(sql, [[req.params.id, memberId, comment, star_rate, comment_time]]);

  // 將該食譜的星星數做加總 / 該食譜的總評分人數
  let sql2 = "SELECT * FROM private_comment WHERE private_id = ?";
  let result = await connection.queryAsync(sql2, [req.params.id]);

  // 該食譜的總評分人數
  let totalNum = result.length;

  // 該食譜的總星星數
  let totalStar = result.reduce((acc, value) => {
    return value.star_rate + acc;
  }, 0);

  // 該食譜的平均數
  let averageStar = (totalStar / totalNum).toFixed(1);

  // 寫回 private_recipe 的 star_rate
  let sql3 = "UPDATE private_recipe SET star_rate = ? WHERE id = ?";
  let result2 = await connection.queryAsync(sql3, [averageStar, req.params.id]);

  res.json(data);
});

// 會員私藏食譜部分
router.get("/myrecipe", async function (req, res, next) {
  const memberId = req.session.member.id
  // let memberId = 5;
  console.log("memberId =", memberId);
  let sql = "SELECT * FROM private_recipe WHERE member_id = ?";
  let result = await connection.queryAsync(sql, [memberId]);

  let sql2 = "SELECT * FROM private_comment WHERE member_id = ?";
  let commentResult = await connection.queryAsync(sql2, [memberId]);

  let sql3 = "SELECT * FROM private_like WHERE user_id = ?";
  let likeResult = await connection.queryAsync(sql3, [memberId]);

  let sql4 = "SELECT * FROM private_view WHERE user_id = ?";
  let viewResult = await connection.queryAsync(sql4, [memberId]);

  let memSql = "SELECT id FROM private_recipe WHERE member_id = ?"
  let numResult = await connection.queryAsync(memSql, [memberId])
  console.log(numResult)
  let recipeId = numResult.map((value) => {
    return value.id
  })
  let many = "SELECT count(*) AS count FROM private_follow WHERE private_id IN ?"
  let followTotal = await connection.queryAsync(many, [[recipeId]])
  console.log(followTotal)
  // let sql5 = "SELECT * FROM private_follow WHERE user_id = ?";
  // let followResult = await connection.queryAsync(sql5, [memberId]);
  res.json({ result, commentResult, likeResult, viewResult, followTotal});
});
// 先檢查是否已登入
// router.use(loginCheckMiddleware);
module.exports = router;
