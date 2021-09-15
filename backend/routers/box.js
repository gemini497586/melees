const express = require("express");
const connection = require("../utils/db");
const router = express.Router();
const { loginCheckMiddleware } = require("../middlewares/auth");
const moment = require("moment");

router.get("/", async (req, res, next) => {
    let result = await connection.queryAsync(
        "SELECT * FROM box WHERE id NOT IN (5,8,13,15)"
    );
    let result2 = await connection.queryAsync(
        "SELECT * FROM box WHERE id IN (5,8,13,15)"
    );
    res.json({ result, result2 });
});
//
router.post("/save", loginCheckMiddleware, async (req, res, next) => {
    // 確認資料是否拿到
    // console.log(req.body);
    // 確認是否拿到會員id
    // console.log(req.session.member.id);
    const createDate = moment().format("YYYYMMDD");
    const memberId = req.session.member.id;
    // console.log(memberId)
    let result = await connection.queryAsync(
        "INSERT INTO box_save (member_id,box_ids,name,cal,box_images,create_at) VALUE (?)",
        [
            [
                memberId,
                req.body.saveId,
                req.body.name,
                req.body.cal,
                req.body.saveImage,
                createDate,
            ],
        ]
    );
    res.json();
});

router.get("/boxsave", async (req, res, next) => {
    const memberId = req.session.member.id;
    // console.log(memberId);
    let result = await connection.queryAsync(
        "SELECT * FROM box_save WHERE member_id=?",
        [memberId]
    );
    let result2 = await connection.queryAsync("SELECT id,name FROM box");
    res.json({ result2, result });
});

router.post("/delete", async (req, res, next) => {
    // console.log(req.body);
    let result = await connection.queryAsync(
        "DELETE FROM box_save WHERE id=?",
        [[req.body.id]]
    );
    res.json();
});

module.exports = router;
