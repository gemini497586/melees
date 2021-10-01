const express = require("express");
const connection = require("../utils/db");
const router = express.Router();

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
    const memberId = req.session.member ? req.session.member.id : "";
    // const memberId = 1;

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

    // 抓這個會員收藏的所有商品
    let member_save = await connection.queryAsync(
        "SELECT feature_id FROM feature_save WHERE member_id = ?",
        [memberId]
    );
    res.json({ feature, member_save });
});

router.get("/product", async (req, res, next) => {
    const memberId = req.session.member ? req.session.member.id : "";
    // const memberId = 1;

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
    res.json({ product, member_save });
});

module.exports = router;
