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
    let feature = await connection.queryAsync(
        "SELECT a.id AS listId, a.type_id, a.name AS listName, " +
            "b.id AS linkId, b.link, b.name AS linkName, b.img AS linkImg, " +
            "c.id AS imgid, c.feature_id AS imgfeatureid, GROUP_CONCAT(c.file_type ORDER BY c.file_type) AS featureimg, " +
            "(SELECT COUNT(member_id) FROM feature_save WHERE a.id=feature_id) AS save_qty " +
            "FROM feature_list AS a INNER JOIN feature_link AS b ON a.link_id=b.id INNER JOIN feature_img AS c ON a.id=c.feature_id " +
            "GROUP BY a.id ORDER BY save_qty DESC LIMIT 4 "
    );
    for (let i = 0; i < feature.length; i++) {
        feature[i].featureimg = feature[i].featureimg.split(",");
    }

    res.json(feature);
});

module.exports = router;
