const express = require("express");
const connection = require("../utils/db");
const router = express.Router();
const moment = require("moment");
const { v4 } = require('uuid');
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
router.get("/test", async function (req, res, next) {
  const sql = "SELECT private_id, count(*) as like_count FROM private_like WHERE private_id GROUP BY private_id IN (1)"
  const result = await connection.queryAsync(sql);

  res.json(result)
})
// 抓食譜的資料 (食譜首頁)
router.get("/index", async function (req, res, next) {
  const userId = req.session.member ? req.session.member.id : 0
  console.log(userId)

  const sql = "SELECT private_recipe.*, member.nickname, member.picture AS member_picture FROM private_recipe JOIN member WHERE private_recipe.member_id = member.id AND private_recipe.valid = 1 ORDER BY private_recipe.id DESC";
  const recipeInfo = await connection.queryAsync(sql);

  const recipeList = []
  recipeInfo.map((value) => {
    recipeList.push(value.id)
  })

  // 按讚數程式碼
  const likeSql = "SELECT private_id, count(*) as like_count FROM private_like GROUP BY private_id";
  const likeCount = await connection.queryAsync(likeSql);

  const likeList = []
  
  likeCount.map((value) => {
    likeList.push(value.private_id)
  })

  let subLike = recipeList.filter((e) => {
    return likeList.indexOf(e) === -1
  })

  subLike.forEach((value) => {
    likeCount.push({private_id: value, like_count: 0,},)
  })

  likeCount.sort((a, b) => {
    return b.private_id - a.private_id})

  // 瀏覽數程式碼 
  const viewSql = "SELECT private_id, count(*) as view_count FROM private_view GROUP BY private_id";
  const viewCount = await connection.queryAsync(viewSql);

  const viewList = []
  viewCount.map((value) => {
    viewList.push(value.private_id)
  })

  let subView = recipeList.filter((e) => {
    return viewList.indexOf(e) === -1
  })

  subView.forEach((value) => {
    viewCount.push({private_id: value, view_count: 0,},)
  })

  viewCount.sort((a, b) => {
    return b.private_id - a.private_id
  })

  // 評論程式碼
  const commentSql = "SELECT private_id, count(*) as comment_count FROM private_comment GROUP BY private_id";
  const commentCount= await connection.queryAsync(commentSql);

  const commentList = []
  commentCount.map((value) => {
    commentList.push(value.private_id)
  })

  let subComment = recipeList.filter((e) => {
    return commentList.indexOf(e) === -1
  })

  subComment.forEach((value) => {
    commentCount.push({private_id: value, comment_count: 0,},)
  })

  commentCount.sort((a, b) => {
    return b.private_id - a.private_id
  })
  
  // 增加 KEY 跟 VALUE 至 OBJECT 中
  recipeInfo.map((value, index) => {
    value.likeCount = likeCount[index].like_count
    value.viewCount = viewCount[index].view_count
    value.commentCount = commentCount[index].comment_count
  })

  // 選取使用者有沒有對這個食譜按收藏
  let saveUser = "SELECT * FROM private_save WHERE user_id = ?";
  let saved = await connection.queryAsync(saveUser, [userId]);

  // 選取使用者有沒有對這個食譜按讚
  let likeUser = "SELECT * FROM private_like WHERE user_id = ?";
  let liked = await connection.queryAsync(likeUser, [userId]);

  res.json({recipeInfo, saved, liked});
});

// 進入食譜的資料 (內頁)
router.get("/index/recipe/:id", async function (req, res, next) {
  const userId = req.session.member ? req.session.member.id : ""
  
  const sql = "SELECT * FROM private_recipe WHERE id = ?";
  const result = await connection.queryAsync(sql, [req.params.id]);

  const recipeSql = "SELECT * FROM private_recipe WHERE member_id = ?";
  const memberTotal = await connection.queryAsync(recipeSql, [result[0].member_id])
  let memberT = memberTotal.length
  
  const follow1 = "SELECT * FROM private_follow WHERE member_id = ?"
  const followTotal = await connection. queryAsync(follow1, [result[0].member_id])
  let followT = followTotal.length
  

  const recipeTotal = "SELECT id FROM private_recipe WHERE member_id = ?"
  const PersonRecipe = await connection.queryAsync(recipeTotal, [result[0].member_id])
  let PersonRecipeArr = []
  PersonRecipe.map((value) => {PersonRecipeArr.push(value.id)})
  const member = "SELECT * FROM member WHERE id = ?"
  const memResult = await connection.queryAsync(member, [result[0].member_id])

  const sql2 = "SELECT * FROM private_follow WHERE user_id = ? AND member_id = ?";
  const follow = await connection.queryAsync(sql2, [userId, result[0].member_id]);
  let followed = follow.length > 0;

  const sql3 = "SELECT * FROM private_like WHERE user_id = ? AND private_id = ?";
  const like = await connection.queryAsync(sql3, [userId, req.params.id]);
  let liked = like.length > 0;

  const sql4 = "SELECT * FROM private_save WHERE user_id = ? AND private_id = ?";
  const save = await connection.queryAsync(sql4, [userId, req.params.id]);
  let saved = save.length > 0;

  res.json({ result, memberT, followT, memResult, followed, liked, saved });
});

// 追蹤的新增或刪除
router.get("/add-follow/:id", async function (req, res, next) {
  const userId = req.session.member.id
  
  let sql = "SELECT * FROM private_recipe WHERE id = ?";
  let result = await connection.queryAsync(sql, [req.params.id]);

  let sql2 = "INSERT INTO private_follow (member_id, user_id) VALUES (?, ?)";
  let follow = await connection.queryAsync(sql2, [result[0].member_id, userId]);

  res.json(follow);
});
router.get("/remove-follow/:id", async function (req, res, next) {
  const userId = req.session.member.id

  let sql = "SELECT * FROM private_recipe WHERE id = ?";
  let result = await connection.queryAsync(sql, [req.params.id]);

  let sql2 = "DELETE FROM private_follow WHERE member_id = ? AND user_id = ?";
  let follow = await connection.queryAsync(sql2, [result[0].member_id, userId]);

  res.json(follow);
});

// 按讚的新增或刪除
router.get("/add-like/:id", async function (req, res, next) {
  const userId = req.session.member.id

  let sql = "INSERT INTO private_like (private_id, user_id) VALUES (?, ?)";
  let like = await connection.queryAsync(sql, [req.params.id, userId]);

  res.json(like);
});
router.get("/remove-like/:id", async function (req, res, next) {
  const userId = req.session.member.id

  let sql = "DELETE FROM private_like WHERE private_id = ? AND user_id = ?";
  let like = await connection.queryAsync(sql, [req.params.id, userId]);

  res.json(like);
});

// 按收藏的新增或刪除
router.get("/add-save/:id", async function (req, res, next) {
  const userId = req.session.member.id
  let sql = "INSERT INTO private_save (private_id, user_id) VALUES (?, ?)";
  let save = await connection.queryAsync(sql, [req.params.id, userId]);

  res.json(save);
});
router.get("/remove-save/:id", async function (req, res, next) {
  const userId = req.session.member.id
  let sql = "DELETE FROM private_save WHERE private_id = ? AND user_id = ?";
  let save = await connection.queryAsync(sql, [req.params.id, userId]);

  res.json(save);
});

// 抓取食材的資料
router.get("/ingred/:id", async function (req, res, next) {
  let sql = "SELECT * FROM private_ingred WHERE private_id = ?";
  let data = await connection.queryAsync(sql, [req.params.id]);
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
  const userId = req.session.member ? req.session.member.id : 0
  let sql = "INSERT INTO private_view (private_id, user_id) VALUES (?, ?)";
  let data = await connection.queryAsync(sql, [req.params.id, userId]);
  res.send("success");
});

// 先檢查是否已登入
router.use(loginCheckMiddleware);

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
  
  let sql4 = "SELECT * FROM private_tags WHERE private_id = ?"
  let tags = await connection.queryAsync(sql4, [req.params.id])

  res.json({recipe, ingred, steps, tags})
})

// 編輯食譜，編輯後送資料到資料庫
router.post("/edit/post-data/:id", uploader.single("photo"), async function(req, res, next) {
  const filename = req.file ? req.file.filename : "";
  const name = req.body.name;
  const intro = req.body.intro;
  const qty = req.body.qty;
  const newIngred = JSON.parse(req.body.ingred);
  const newStep = JSON.parse(req.body.step);
  const newTag = JSON.parse(req.body.tags);

  if(filename === "") {
    // 更新 private_recipe (沒有更改照片的)
    let sql = "UPDATE private_recipe SET name = ?, intro = ?, qty = ? WHERE id = ?"
    let result = await connection.queryAsync(sql, [name, intro, qty, req.params.id])
    console.log("編輯沒有更改照片的")
  } else {
    // 更新 private_recipe (有更改照片的)
    let sql = "UPDATE private_recipe SET picture = ?, name = ?, intro = ?, qty = ? WHERE id = ?"
    let result = await connection.queryAsync(sql, [filename, name, intro, qty, req.params.id])
    console.log("編輯有更改照片的")
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

  // 取出 Tag 原本欄位
  let sql4 = "SELECT * FROM private_tags WHERE private_id = ?"
  let oldTag = await connection.queryAsync(sql4, [req.params.id])
  let oldTagCount = oldTag.length
  let newTagCount = newTag.length

  let tagRow = oldTagCount - newTagCount
  if(tagRow > 0) {
    let tagRetain = oldTag.slice(0, newTagCount)
    let tagRemove = oldTag.slice(newTagCount)

    // 更新步驟到資料表
    newTag.forEach(async (value, index) => {
      let tagList = "UPDATE private_tags SET tags = ? WHERE id = ?"
      let tagResult = await connection.queryAsync(tagList, [value.tags, tagRetain[index].id]);
    });

    // 刪除原本剩餘的步驟
    tagRemove.forEach(async (value, index) => {
      let sql = "DELETE FROM private_tags WHERE id = ?"
      let test = await connection.queryAsync(sql, [value.id])
    })
  } else if (tagRow < 0) {
    let tagRetain = newTag.slice(0, oldTagCount)
    let tagInsert = newTag.slice(oldTagCount)

    // 更新食材到資料表
    tagRetain.forEach(async (value,index) => {
      let tagList = "UPDATE private_tags SET tags = ? WHERE id = ?"
      let tagResult = await connection.queryAsync(tagList, [value.tags, tagRetain[index].id]);
    })

    // 新增多的欄位
    tagInsert.forEach(async (value, index) => {
      let sql = "INSERT INTO private_tags (private_id, tags) VALUES (?)"
      let test = await connection.queryAsync(sql, [[req.params.id, value.tags]])
    })
  } else {
    // 更新食材到資料表
    newTag.forEach(async (value, index) => {
      let tagList = "UPDATE private_tags SET tags = ? WHERE id = ?"
      let ingredResult = await connection.queryAsync(tagList, [value.tags, oldTag[index].id]);
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
  const tag = JSON.parse(req.body.tag);
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

  // 新增步驟到資料表
  tag.forEach(async (value) => {
    let tagList = "INSERT INTO private_tags (private_id, tags) VALUES (?)";
    let stepResult = await connection.queryAsync(tagList, [[lastId[0].id, value]]);
  });

  res.json(data);
});


// 上傳留言及評分部分
router.post("/comment/upload/:id", async function (req, res, next) {
  const memberId = req.session.member.id
  const comment = req.body.comment;
  const star_rate = req.body.starValue;
  const comment_time = moment().format("YYYY/MM/DD");

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

// 刪除食譜
router.get("/delete-recipe/:id", async function (req, res, next) {
  const sql = "UPDATE private_recipe SET valid = 0 WHERE id = ?"
  const result = await connection.queryAsync(sql, [req.params.id])
  res.json(result)
})
// 會員私藏食譜部分
router.get("/myrecipe", async function (req, res, next) {
  const memberId = req.session.member.id
  // const memberId = 4

  const sql = "SELECT * FROM private_recipe WHERE member_id = ? AND valid = 1 ORDER BY id DESC";
  const recipeInfo = await connection.queryAsync(sql, [memberId]);
  console.log(recipeInfo)
  if (recipeInfo.length === 0) {
    console.log("這個會員沒有新增食譜過")
    let totalLike = 0
    let totalView = 0
    let totalComment = 0
    let TotalFollow = 0
    res.json({ recipeInfo, totalLike, totalView, totalComment, TotalFollow});

  } else {
    const recipeId = []
    recipeInfo.map((value) => {
      recipeId.push(value.id)
    })
  
    // 按讚數程式碼
    const sql2 = "SELECT private_id, count(*) as like_count FROM private_like WHERE private_id IN ? GROUP BY private_id";
    const likeResult = await connection.queryAsync(sql2, [[recipeId]]);
  
    const likeId = []
    
    likeResult.map((value) => {
      likeId.push(value.private_id)
    })
  
    let subLike = recipeId.filter((e) => {
      return likeId.indexOf(e) === -1
    })
  
    subLike.forEach((value) => {
      likeResult.push({private_id: value, like_count: 0,},)
    })
  
    likeResult.sort((a, b) => {
      return b.private_id - a.private_id})
  
    // 瀏覽數程式碼 
    const sql3 = "SELECT private_id, count(*) as view_count FROM private_view WHERE private_id IN ? GROUP BY private_id";
    const viewResult = await connection.queryAsync(sql3, [[recipeId]]);
      
    const viewList = []
    viewResult.map((value) => {
      viewList.push(value.private_id)
    })
  
    let subView = recipeId.filter((e) => {
      return viewList.indexOf(e) === -1
    })
  
    subView.forEach((value) => {
      viewResult.push({private_id: value, view_count: 0,},)
    })
  
    viewResult.sort((a, b) => {
      return b.private_id - a.private_id
    })
  
    // 評論程式碼
    const sql4 = "SELECT private_id, count(*) as comment_count FROM private_comment WHERE private_id IN ? GROUP BY private_id";
    const commentResult = await connection.queryAsync(sql4, [[recipeId]]);
  
    const commentList = []
    commentResult.map((value) => {
      commentList.push(value.private_id)
    })
  
    let subComment = recipeId.filter((e) => {
      return commentList.indexOf(e) === -1
    })
  
    subComment.forEach((value) => {
      commentResult.push({private_id: value, comment_count: 0,},)
    })
  
    commentResult.sort((a, b) => {
      return b.private_id - a.private_id
    })
  
    const sql5 = "SELECT * FROM private_follow WHERE member_id = ?"
    const followResult = await connection.queryAsync(sql5, [memberId])
    const TotalFollow = followResult.length
  
    // 該會員獲得的總按讚數
    let totalLike = likeResult.reduce((acc, value) => {
      return value.like_count + acc;
    }, 0);
  
    // 該會員獲得的總瀏覽數
    let totalView = viewResult.reduce((acc, value) => {
      return value.view_count + acc;
    }, 0);
  
    // 該會員獲得的總評論數
    let totalComment = commentResult.reduce((acc, value) => {
      return value.comment_count + acc;
    }, 0);
  
    // 增加 key 跟 value 至 object 中
    recipeInfo.map((value, index) => {
      value.likeCount = likeResult[index].like_count
      value.viewCount = viewResult[index].view_count
      value.commentCount = commentResult[index].comment_count
    })
    res.json({ recipeInfo, totalLike, totalView, totalComment, TotalFollow});
  }
  

});

module.exports = router;
