const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
const moment = require("moment");
const { loginCheckMiddleware } = require("../middlewares/auth");

router.get("/", async (req, res, next) => {
    let result = await connection.queryAsync(
        "SELECT * FROM box WHERE id NOT IN (5,8,13,15,16)"
    );
    let result2 = await connection.queryAsync(
        "SELECT * FROM box WHERE id IN (5,8,13,15,16)"
    );
    res.json({ result, result2 });
});

router.get("/recipe", async (req, res, next) => {
    const memberId = req.session.member ? req.session.member.id : 0;

    // 隨機抓四個，顯示被收藏數
    let feature = await connection.queryAsync(
        "SELECT a.id, a.type_id, a.name, " +
            "b.name AS linkName, " +
            "GROUP_CONCAT(c.file_type ORDER BY c.file_type) AS featureimg, " +
            "(SELECT COUNT(member_id) FROM feature_save WHERE a.id=feature_id) AS save_qty " +
            "FROM feature_list AS a INNER JOIN feature_link AS b ON a.link_id=b.id INNER JOIN feature_img AS c ON a.id=c.feature_id " +
            "GROUP BY a.id ORDER BY RAND() LIMIT 4 "
    );
    feature = feature.map((v) => {
        v.featureimg = v.featureimg.split(",")[0];
        return v;
    });

    // 抓這個會員收藏的所有商品，如果沒資料給0
    let member_save = await connection.queryAsync(
        "SELECT feature_id FROM feature_save WHERE member_id = ?",
        [memberId]
    );
    if (member_save.length < 1) {
        member_save = [0];
    }
    res.json({ feature, member_save });
});

router.get("/product", async (req, res, next) => {
    const memberId = req.session.member ? req.session.member.id : 0;

    // 隨機抓四個，顯示被收藏數
    let product = await connection.queryAsync(
        "SELECT a.id, a.category, a.image, a.name, a.price, " +
            "(SELECT COUNT(member_id) FROM product_save WHERE a.id=product_id) AS save_qty " +
            "FROM product AS a " +
            "GROUP BY a.id ORDER BY RAND() LIMIT 4"
    );

    // 抓這個會員收藏的所有商品
    let member_save = await connection.queryAsync(
        "SELECT product_id FROM product_save WHERE member_id = ?",
        [memberId]
    );
    if (member_save.length < 1) {
        member_save = [0];
    }
    res.json({ product, member_save });
});

// 先檢查是否已登入
router.use(loginCheckMiddleware);

// 收藏便當
router.post("/savebox", async (req, res, next) => {
    const memberId = req.session.member.id;
    const createDate = moment().format("YYYYMMDD");
    const name = req.body.name;
    const cal = req.body.cal;
    const bentoId = req.body.bentoId;

    if (!name) {
        return next({
            status: 400,
            message: "未輸入便當名稱",
        });
    } else {
        await connection.queryAsync(
            "INSERT INTO box_save_main (member_id,name,cal,create_date) VALUE (?)",
            [[memberId, name, cal, createDate]]
        );
        let lastId = await connection.queryAsync(
            "SELECT * FROM box_save_main ORDER BY id DESC LIMIT 1"
        );
        // console.log("上一個ID", lastId[0].id);
        for (let i = 0; i < bentoId.length; i++) {
            await connection.queryAsync(
                "INSERT INTO box_save_detail (save_id, box_id) VALUES (?)",
                [[lastId[0].id, bentoId[i]]]
            );
        }
        res.status(200).json({ message: "客製化便當收藏成功" });
    }
});

// 讀取收藏便當
// 從 main 撈出這個會員收藏的id -> JOIN detail 同筆收藏的 box_id
// 再從 box_id 撈出該食材的資料
router.get("/readsavebox", async (req, res, next) => {
    const memberId = req.session.member.id;
    // const memberId = 1;
    let result = await connection.queryAsync(
        "SELECT a.*, GROUP_CONCAT(b.box_id ORDER BY b.id ) AS box_ids FROM box_save_main AS a INNER JOIN box_save_detail AS b ON a.id=b.save_id WHERE member_id=? GROUP BY a.id ORDER BY id DESC",
        [memberId]
    );
    // 檢查是否有收藏
    if (result.length === 0) {
        res.json({ message: "您好，目前尚未收藏任何便當" });
    } else {
        let result2 = await connection.queryAsync(
            "SELECT id,name,inside_image FROM box"
        );
        res.json({ result, result2 });
    }
});

// 刪除收藏便當
router.post("/deletesavebox", async (req, res, next) => {
    await connection.queryAsync("DELETE FROM box_save_main WHERE id=?", [
        req.body.id,
    ]);
    await connection.queryAsync("DELETE FROM box_save_detail WHERE save_id=?", [
        req.body.id,
    ]);
    res.status(200).json({ message: "客製化便當收刪除成功" });
});

module.exports = router;
