const express = require("express");
const connection = require("../utils/db");
const router = express.Router();

router.get("/market", async (req, res, next) => {
    const word = `%${req.query.word}%`;
    // console.log(word);
    let result = await connection.queryAsync(
        "SELECT * FROM product WHERE name LIKE ? ORDER BY id DESC",
        [word]
    );
    let count = await connection.queryAsync(
        "SELECT COUNT(*) AS total FROM product WHERE name LIKE ? ",
        [word]
    );

    if (count.length > 0) {
        count = count[0];
    }
    res.json({ count, result });
});

router.get("/recipe", async (req, res, next) => {
    const word = `%${req.query.word}%`;
    // 私藏
    let private = await connection.queryAsync(
        "SELECT a.id, a.picture, a.name, a.create_date, " +
            "b.id AS member_id, b.name AS member_name, b.picture AS member_pic, " +
            "(SELECT COUNT(user_id) FROM private_like WHERE a.id=private_id) AS like_qty, " +
            "(SELECT COUNT(user_id) FROM private_view WHERE a.id=private_id)AS view_qty " +
            "FROM private_recipe AS a INNER JOIN member AS b ON a.member_id = b.id " +
            "WHERE a.name LIKE ? " +
            "GROUP BY a.id ORDER BY id DESC",
        [word]
    );
    // 精選
    let feature = await connection.queryAsync(
        "SELECT a.id AS listId, a.type_id, a.name AS listName, a.create_date, " +
            "b.id AS linkId, b.link, b.name AS linkName, b.img AS linkImg, " +
            "c.id AS imgid, c.feature_id AS imgfeatureid, GROUP_CONCAT(c.file_type ORDER BY c.file_type) AS featureimg, " +
            "(SELECT COUNT(member_id) FROM feature_like WHERE a.id=feature_id) AS like_qty ," +
            "(SELECT COUNT(member_id) FROM feature_view WHERE a.id=feature_id) AS view_qty " +
            "FROM feature_list AS a INNER JOIN feature_link AS b ON a.link_id=b.id INNER JOIN feature_img AS c ON a.id=c.feature_id " +
            "WHERE a.name LIKE ? GROUP BY a.id ORDER BY a.id DESC",
        [word]
    );
    for (let i = 0; i < feature.length; i++) {
        feature[i].featureimg = feature[i].featureimg.split(",");
    }

    // 數量
    let privateCount = await connection.queryAsync(
        "SELECT COUNT(*) AS total FROM private_recipe WHERE name LIKE ? ",
        [word]
    );
    let featureCount = await connection.queryAsync(
        "SELECT COUNT(*) AS total FROM feature_list WHERE name LIKE ? ",
        [word]
    );
    let count = {
        privateCount: privateCount[0].total,
        featureCount: featureCount[0].total,
        totalCount: privateCount[0].total + featureCount[0].total,
    };
    res.json({
        count,
        private,
        feature,
    });
});

module.exports = router;
