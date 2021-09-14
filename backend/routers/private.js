const express = require("express")
const connection = require("../utils/db")
const router = express.Router();
const moment = require("moment")
const {loginCheckMiddleware} = require("../middlewares/auth")

const comment_time = moment().format('YYYY/MM/DD');

router.get("/star", async function (req, res, next) {
    
    let sql = "SELECT * FROM private_comment";
    let result = await connection.queryAsync(sql);
    let newResult = result.reduce((acc, value) => {
        return value.star_rate + acc;
    }, 0)
    
    res.json(newResult) 
})



router.get("/", async function (req, res, next) {
    let recipe = "SELECT * FROM private_recipe";
    let result = await connection.queryAsync(recipe);  

    let like = "SELECT private_id, count(*) as count FROM private_like GROUP BY private_id"
    let result2 = await connection.queryAsync(like)

    let view = "SELECT private_id, count(*) as count FROM private_view GROUP BY private_id"
    let result3 = await connection.queryAsync(view)
 
    res.json({result, result2, result3})
});

router.get("/:id", async function (req, res, next) {
    let sql = "SELECT * FROM private_recipe WHERE id = ?"
    let data = await connection.queryAsync(sql, [req.params.id])
    
    res.json(data)
});

// 抓取食材的資料
router.get("/ingred/:id", async function (req, res, next) {
    let sql = "SELECT * FROM private_ingred WHERE private_id = ?"
    let data = await connection.queryAsync(sql, [req.params.id])
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

router.get("/comment/:id", async function (req, res, next) {
    let sql = "SELECT * FROM private_comment WHERE private_id = ?"
    let data = await connection.queryAsync(sql, [req.params.id])
    res.json(data)
});

router.get("/addview/:id", async function(req, res ,next) {
    let sql = "INSERT INTO private_view (private_id) VALUES (?)"
    let data = await connection.queryAsync(sql, [req.params.id])
    res.send("success")
});

router.post("/upload", async function (req, res, next) {
    let member_id = 3
    const name = req.body.name;
    const intro = req.body.intro;
    const qty = req.body.qty;
    const ingred = req.body.ingred;
    const steps = req.body.steps
    const recipe_time = moment().format('YYYY-MM-DD');
    console.log(ingred)
    console.log(steps)

    // 新增到 private_recipe 資料表裡
    let sql = "INSERT INTO private_recipe (name, intro, qty, member_id, create_date) VALUES (?, ?, ?, ?, ?)"
    let data = await connection.queryAsync(sql, [name, intro, qty, privateMember, recipe_time])
    
    
    // 新增食材到資料表
    ingred.forEach(async (value)=>{
        let ingredList = "INSERT INTO private_ingred (ingred, ingred_unit) VALUES (?, ?)"
        let ingredResult = await connection.queryAsync(ingredList, [value.ingred, value.name])
    })
    res.json(data)
})

module.exports = router;


