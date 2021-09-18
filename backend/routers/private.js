const express = require("express")
const connection = require("../utils/db")
const router = express.Router();
const moment = require("moment")
const { uuid } = require("uuidv4");
// nodejs 的物件
const path = require("path");
const {loginCheckMiddleware} = require("../middlewares/auth")

// multer 用來處理 Form-data (Content-Type: multipart/form-data)
const multer = require("multer");
// 為了上傳，需要告訴他上傳的檔案存在哪裡
// 通常存在硬碟
const storage = multer.diskStorage({
    // 設定儲存的目的地
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../", "images", "private"))
    },
    filename: function(req, file, cb){
        // 檔案命名
        // 怎麼取新名字 ?    
        let ext = file.originalname.split(".").pop()
            console.log(`${uuid()}.${ext}`)
            cb(null, `${uuid()}.${ext}`)
    }
})

// 圖片驗證
const uploader = multer({
    storage: storage,
    fileFilter: function(req, file, cb){
        console.log("判斷副檔名", file.mimetype)
        // 判斷檔案的型態不是這三種的話，就 error
        if(
            file.mimetype !== "image/jpg" &&
            file.mimetype !== "image/png" &&
            file.mimetype !== "image/jpeg"
        ){
            cb(new Error("不接受的檔案型態"), false)
        }
        cb(null, true)
    },
    limits: {
        // 1MB
        // 1024 byte * 1024 byte = 1048576 byte ~= 1MB 
        fileSize: 1024 * 1024
    }
})

// 抓食譜的資料 (食譜首頁)
router.get("/index", async function (req, res, next) {
    let memberId = 5
    let recipe = "SELECT * FROM private_recipe";
    let result = await connection.queryAsync(recipe);  

    let like = "SELECT private_id, count(*) as count FROM private_like GROUP BY private_id"
    let result2 = await connection.queryAsync(like)

    let view = "SELECT private_id, count(*) as count FROM private_view GROUP BY private_id"
    let result3 = await connection.queryAsync(view)
    
    let saveState = "SELECT * FROM private_save WHERE user_id =?"
    let result4 = await connection.queryAsync(saveState, [memberId])
    
    let likeState = "SELECT * FROM private_like WHERE user_id =?"
    let result5 = await connection.queryAsync(likeState, [memberId])

    res.json({result, result2, result3, result4, result5})
});

// 進入食譜的資料 (內頁)
router.get("/index/:id?", async function (req, res, next) {
    const memberId = 5
    let sql = "SELECT * FROM private_recipe WHERE id = ?"
    let result = await connection.queryAsync(sql, [req.params.id])
    
    let sql2 ="SELECT * FROM private_follow WHERE user_id = ? AND private_id = ?"
    let follow = await connection.queryAsync(sql2, [memberId, req.params.id])
    let followed = follow.length > 0

    let sql3 ="SELECT * FROM private_like WHERE user_id = ? AND private_id = ?"
    let like = await connection.queryAsync(sql3, [memberId, req.params.id])
    let liked = like.length > 0


    let sql4 ="SELECT * FROM private_save WHERE user_id = ? AND private_id = ?"
    let save = await connection.queryAsync(sql4, [memberId, req.params.id])
    let saved = save.length > 0

    res.json({result, followed, liked, saved})
});

// 追蹤的新增或刪除
router.get("/add-follow/:id", async function (req, res ,next) {
    let memberId= 5
    let sql = "INSERT INTO private_follow (private_id, user_id) VALUES (?, ?)"
    let follow = await connection.queryAsync(sql, [req.params.id, memberId])

    res.json(follow)
})
router.get("/remove-follow/:id", async function (req, res ,next) {
    let memberId= 5
    let sql = "DELETE FROM private_follow WHERE private_id = ? AND user_id = ?"
    let follow = await connection.queryAsync(sql, [req.params.id, memberId])

    res.json(follow)
})

// 按讚的新增或刪除
router.get("/add-like/:id", async function (req, res ,next) {
    let memberId= 5
    let sql = "INSERT INTO private_like (private_id, user_id) VALUES (?, ?)"
    let like = await connection.queryAsync(sql, [req.params.id, memberId])

    res.json(like)
})
router.get("/remove-like/:id", async function (req, res ,next) {
    let memberId= 5
    let sql = "DELETE FROM private_like WHERE private_id = ? AND user_id = ?"
    let like = await connection.queryAsync(sql, [req.params.id, memberId])

    res.json(like)
})

// 按收藏的新增或刪除
router.get("/add-save/:id", async function (req, res ,next) {
    let memberId= 5
    let sql = "INSERT INTO private_save (private_id, user_id) VALUES (?, ?)"
    let save = await connection.queryAsync(sql, [req.params.id, memberId])

    res.json(save)
})
router.get("/remove-save/:id", async function (req, res ,next) {
    let memberId= 5
    let sql = "DELETE FROM private_save WHERE private_id = ? AND user_id = ?"
    let save = await connection.queryAsync(sql, [req.params.id, memberId])

    res.json(save)
})

// 抓取食材的資料
router.get("/ingred/:id", async function (req, res, next) {
    // const memberId = req.session.member.id
    const memberId = 5
    console.log("asdasdasd", memberId)
    console.log("132132123")
    let sql = "SELECT * FROM private_ingred WHERE private_id = ?"
    let data = await connection.queryAsync(sql, [req.params.id])
    console.log(data)
    res.json(data)
})

// 抓取步驟的資料
router.get("/steps/:id", async function (req, res, next) {
    let sql = "SELECT * FROM private_step WHERE private_id = ?"
    let data = await connection.queryAsync(sql, [req.params.id])
    res.json(data)
})

// 抓取 tag 的資料
router.get("/tags/:id", async function (req, res, next) {
    let sql = "SELECT * FROM private_tags WHERE private_id = ?"
    let data = await connection.queryAsync(sql, [req.params.id])
    res.json(data)
});

// 抓取目前食譜的評論
router.get("/comment/:id", async function (req, res, next) {
    let sql = "SELECT * FROM private_comment WHERE private_id = ?"
    let data = await connection.queryAsync(sql, [req.params.id])
    res.json(data)
});

// 更新瀏覽數
router.get("/addview/:id", async function(req, res ,next) {
    let memberId = 5
    let sql = "INSERT INTO private_view (private_id, user_id) VALUES (?, ?)"
    let data = await connection.queryAsync(sql, [req.params.id, memberId])
    res.send("success")
});

// 上傳食譜
// 我只要上傳一張圖片，要加上 single
// req.body 代表前端的 request 裡面全部的資料
router.post("/upload/main", uploader.single("photo"), async function (req, res, next) {
    const filename = req.file ? req.file.filename : ''
    const name = req.body.name;
    const intro = req.body.intro;
    const qty = req.body.qty;
    const ingred = JSON.parse(req.body.ingred);
    const steps = JSON.parse(req.body.steps);
    const time = moment().format('YYYY-MM-DD');
    const star_rate = 0
    const memberId = 5
    const valid = 1
    
    
    // 新增到 private_recipe 資料表裡
    let sql = "INSERT INTO private_recipe (picture, name, intro, qty, member_id, create_date, star_rate, valid) VALUES (?)"
    let data = await connection.queryAsync(sql, [[filename, name, intro, qty, memberId, time, star_rate, valid]])

    // 取得剛新增的食譜 id
    let sql2 = "SELECT * FROM private_recipe ORDER BY id DESC LIMIT 1";
    let lastId = await connection.queryAsync(sql2)
    console.log("最後一次ID", lastId[0].id)

    
    // 新增食材到資料表
    ingred.forEach(async (value)=>{
        let ingredList = "INSERT INTO private_ingred (private_id, ingred, ingred_unit) VALUES (?)"
        let ingredResult = await connection.queryAsync(ingredList, [[lastId[0].id, value.ingred, value.ingred_unit]])
    })

    // 新增食材到資料表
    steps.forEach(async (value) => {
        let stepList = "INSERT INTO private_step (private_id, steps) VALUES (?)"
        let stepResult = await connection.queryAsync(stepList, [[lastId[0].id, value.step]])
    })

    
    
    res.json(data)
})

// 上傳留言及評分部分
router.post("/comment/upload/:id", async function (req, res, next) {
    const memberId = 5
    const comment = req.body.comment
    const comment_time = moment().format('YYYY/MM/DD');
    const star_rate = 3

    // 新增到 private_recipe 資料表裡
    let sql = "INSERT INTO private_comment (private_id, member_id, comment, star_rate, comment_time) VALUES (?)"
    let data = await connection.queryAsync(sql, [[req.params.id, memberId, comment, star_rate, comment_time]])

    // 將該食譜的星星數做加總 / 該食譜的總評分人數
    let sql2 = "SELECT * FROM private_comment WHERE private_id = ?"
    let result = await connection.queryAsync(sql2, [req.params.id])

    // 該食譜的總評分人數
    let totalNum = result.length

    // 該食譜的總星星數
    let totalStar = result.reduce((acc, value) => {
        return value.star_rate + acc;
    }, 0)

    // 該食譜的平均數
    let averageStar = (totalStar / totalNum).toFixed(1)

    // 寫回 private_recipe 的 star_rate
    let sql3 = "UPDATE private_recipe SET star_rate = ? WHERE id = ?"
    let result2 = await connection.queryAsync(sql3, [averageStar, req.params.id])
    
    res.json(data)
})

// 會員私藏食譜部分
router.get("/myrecipe", async function (req, res, next) {
    // const memberId = req.session.member.id
    let memberId = 5
    console.log("memberId =", memberId)
    let sql = "SELECT * FROM private_recipe WHERE member_id = ?"
    let result = await connection.queryAsync(sql, [memberId])

    let sql2 = "SELECT * FROM private_comment WHERE member_id = ?"
    let commentResult = await connection.queryAsync(sql2, [memberId])

    let sql3 = "SELECT * FROM private_like WHERE user_id = ?"
    let likeResult = await connection.queryAsync(sql3, [memberId])

    let sql4 = "SELECT * FROM private_view WHERE user_id = ?"
    let viewResult = await connection.queryAsync(sql4, [memberId])

    let sql5 = "SELECT * FROM private_follow WHERE user_id = ?"
    let followResult = await connection.queryAsync(sql5, [memberId])
    res.json({result, commentResult, likeResult, viewResult, followResult})
})

module.exports = router;


