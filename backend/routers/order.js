const express = require("express");
const connection = require("../utils/db");
const router = express.Router();
const { loginCheckMiddleware } = require("../middlewares/auth");

// 登入才可以使用
// router.use(loginCheckMiddleware);

router.get("/", async (req, res, next) => {
    // 確認是否拿到會員id
    // const memberId = req.session.member.id;
    // console.log(memberId);
    const memberId = 37;
    let result = await connection.queryAsync(
        "SELECT * FROM order_main_list WHERE member_id =? ORDER BY create_date DESC",
        [memberId]
    );
    let count = await connection.queryAsync(
        "SELECT COUNT(*) AS total FROM order_main_list WHERE member_id =?",
        [memberId]
    );
    if (count.length > 0) {
        count = count[0];
    }
    res.json({ count, result });
});

router.get("/detail/:order_number", async (req, res, next) => {
    const memberId = req.session.member.id;
    // const memberId = 37;
    console.log(memberId);
    let mainList = await connection.queryAsync(
        "SELECT * FROM order_main_list WHERE  member_id=? AND id =?",
        [memberId, req.params.order_number]
    );
    if (mainList.length > 0) {
        mainList = mainList[0];

        let result = await connection.queryAsync(
            "SELECT * FROM order_detail_list WHERE order_id =?",
            [[req.params.order_number]]
        );

        // 只抓到result有用到的product_id
        let productIds = result.map((v) => {
            return v.product_id;
        });
        // console.log(productIds);
        let result2 = await connection.queryAsync(
            "SELECT id,name FROM product WHERE id IN ?",
            [[productIds]]
        );

        res.json({ mainList, result, result2 });
    }

    // 只抓到result有用到的product_id
    let productIds = result.map((v) => {
        return v.product_id;
    });
    // console.log(productIds);
    let result2 = await connection.queryAsync(
        "SELECT id,name FROM product WHERE id IN ?",
        [[productIds]]
    );

    res.json({ mainList, result2 });
});

module.exports = router;
