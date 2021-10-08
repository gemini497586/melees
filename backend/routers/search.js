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

// 食譜名稱、食材、tag去撈出符合關鍵字的id，再用id撈出全部資料
router.get("/recipe", async (req, res, next) => {
    // 過濾word空白
    req.query.word = req.query.word.replace(/\s*/g, "");
    const word = `%${req.query.word}%`;

    let result = { private: [], feature: [] };

    // 私藏 食譜名稱
    let privateName = await connection.queryAsync(
        "SELECT id FROM private_recipe WHERE name LIKE ? ",
        [word]
    );
    let privateNameIds = privateName.map((v) => {
        return v.id;
    });
    // console.log("privateNameIds ", privateNameIds);

    // 私藏 食材
    let privateIngred = await connection.queryAsync(
        "SELECT private_id FROM private_ingred WHERE ingred LIKE ?",
        [word]
    );
    let privateIngredIds = privateIngred.map((v) => {
        return v.private_id;
    });
    // console.log("privateIngredIds ", privateIngredIds);

    // 私藏 tags標籤
    let tags = await connection.queryAsync(
        "SELECT private_id FROM private_tags WHERE tags LIKE ?",
        [word]
    );
    let tagIds = tags.map((v) => {
        return v.private_id;
    });
    // console.log("tags ", tagIds);

    // 把上面全部id整理成一個陣列，在用id撈出所有資料(不重複)
    let privateIds = privateNameIds.concat(privateIngredIds).concat(tagIds);
    console.log("privateIds ", privateIds);

    if (privateIds.length > 0) {
        let private = await connection.queryAsync(
            "SELECT a.id, a.picture, a.name, a.create_date, " +
                "b.id AS member_id, b.name AS member_name, b.nickname AS member_nickname, b.picture AS member_pic, " +
                "(SELECT COUNT(user_id) FROM private_like WHERE a.id=private_id) AS like_qty, " +
                "(SELECT COUNT(user_id) FROM private_view WHERE a.id=private_id)AS view_qty " +
                "FROM private_recipe AS a INNER JOIN member AS b ON a.member_id = b.id " +
                "WHERE a.id IN ? " +
                "GROUP BY a.id ORDER BY id DESC",
            [[privateIds]]
        );
        private = private.map((v) => {
            v["type"] = 1;
            return v;
        });
        // console.log(private);
        result["private"] = private;
    }

    // 精選食譜名稱
    let featureName = await connection.queryAsync(
        "SELECT id FROM feature_list WHERE name LIKE ? ",
        [word]
    );
    let featureNameIds = featureName.map((v) => {
        return v.id;
    });
    // console.log("featureNameIds ", featureNameIds);

    // 精選 食材
    let featureprep = await connection.queryAsync(
        "SELECT feature_id FROM feature_prep WHERE prep LIKE ?",
        [word]
    );
    let featureprepIds = featureprep.map((v) => {
        return v.feature_id;
    });
    // console.log("featureprepIds ", featureprepIds);

    // 篩選是否有相同的id，整理出一串id
    let featureIds = featureNameIds.concat(featureprepIds);
    // console.log("featureIds ", featureIds);

    if (featureIds.length > 0) {
        let feature = await connection.queryAsync(
            "SELECT DISTINCT a.id, a.type_id, a.name AS name, " +
                "b.link, b.name AS linkName, b.img AS linkImg, " +
                "c.file_type AS picture, " +
                "(SELECT COUNT(member_id) FROM feature_like WHERE a.id=feature_id) AS like_qty ," +
                "(SELECT COUNT(member_id) FROM feature_view WHERE a.id=feature_id) AS view_qty " +
                "FROM feature_list AS a INNER JOIN feature_link AS b ON a.link_id=b.id INNER JOIN feature_img AS c ON a.id=c.feature_id " +
                "WHERE a.id IN ? " +
                "GROUP BY a.id ORDER BY a.id DESC",
            [[featureIds]]
        );
        feature = feature.map((v) => {
            v["type"] = 2;
            return v;
        });
        result["feature"] = feature;
    }

    // 數量
    let count = {
        privateCount: result.private.length,
        featureCount: result.feature.length,
        totalCount: result.private.length + result.feature.length,
    };

    res.json({ count, result });
});

module.exports = router;
