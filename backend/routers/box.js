const express = require("express");
const connection = require("../utils/db");
const router = express.Router();
const { loginCheckMiddleware } = require("../middlewares/auth");

router.get("/", async (req, res, next) => {
    let result = await connection.queryAsync("SELECT * FROM box");
    res.json(result);
});

router.post("/save", loginCheckMiddleware, async (req, res, next) => {
    // 確認資料是否拿到
    // console.log(req.body);

    // 確認是否拿到會員id
    // console.log(req.session.member.id);
    let result = await connection.queryAsync(
        "INSERT INTO box_save (member_id,box_ids,name,cal) VALUE (?)",
        [[req.session.member.id, req.body.saveId, req.body.name, req.body.cal]]
    );
    res.json();
});

router.get("/boxsave", async (req, res, next) => {
    let result = await connection.queryAsync("SELECT * FROM box_save");
    let result2 = await connection.queryAsync("SELECT * FROM box");
    res.json({ result2, result });
});

module.exports = router;
