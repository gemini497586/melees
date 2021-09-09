const express = require("express");
const connection = require("../utils/db");
const router = express.Router();

router.get("/", async (req, res, next) => {
    let result = await connection.queryAsync("SELECT * FROM box");
    res.json(result);
});

router.post("/save", async (req, res, next) => {
    // 確認資料是否拿到
    // console.log(req.body);

    // 先預設member_id
    let member_id = 1;
    let result = await connection.queryAsync(
        "INSERT INTO box_save (member_id,box_id,name,cal) VALUE (?)",
        [[member_id, req.body.saveId, req.body.name, req.body.cal]]
    );
    res.json();
});

module.exports = router;
