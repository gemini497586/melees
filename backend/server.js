const express = require("express")
const connection = require("./utils/connect")
const cors = require("cors")
let app = express()

app.listen(3001, function () {
    console.log("server is running at port 3001");
});

app.use(cors());

app.get("/", async (req, res) => {
    res.send("hi~")
})

app.get("/api/recipe/star", async function (req, res, next) {
    
    let sql = "SELECT * FROM private_comment";
    let result = await connection.queryAsync(sql);
    let newResult = result.reduce((acc, value) => {
        return value.star_rate + acc;
    }, 0)
    
    res.json(newResult) 
})

app.get("/api/recipe", async function (req, res, next) {
    // query name, like, view
    let sql = "SELECT * FROM private_recipe";
    let result = await connection.queryAsync(sql);  
    // query star_rate
    let sql2 = "SELECT * FROM private_comment"; 
    let result2 = await connection.queryAsync(sql2); 
    res.json({result,result2})
});

app.get("/api/recipe/:id", async function (req, res, next) {
    let sql = "SELECT * FROM private_recipe WHERE id = ?"
    let data = await connection.queryAsync(sql, [req.params.id])
    

    // let sql2 = "SELECT * FROM private_like WHERE id = ?"
    // let like = await connection.queryAsync(sql2, [req.params.id])

    res.json(data)
});

app.get("/api/recipe/ingred/:id", async function (req, res, next) {
    let sql = "SELECT * FROM private_ingred WHERE private_id = ?"
    let data = await connection.queryAsync(sql, [req.params.id])
    res.json(data)
})

app.get("/api/recipe/steps/:id", async function (req, res, next) {
    let sql = "SELECT * FROM private_step WHERE private_id = ?"
    let data = await connection.queryAsync(sql, [req.params.id])
    res.json(data)
})

app.get("/api/recipe/comment/:id", async function (req, res, next) {
    let sql = "SELECT * FROM private_comment WHERE private_id = ?"
    let data = await connection.queryAsync(sql, [req.params.id])
    res.json(data)
})

app.use((req, res, next) => {
    res.status(404)
});