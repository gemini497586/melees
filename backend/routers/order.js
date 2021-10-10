const express = require("express");
const connection = require("../utils/db");
const router = express.Router();
const { loginCheckMiddleware } = require("../middlewares/auth");
const moment = require("moment");

// 登入才可以使用
router.use(loginCheckMiddleware);

router.post("/", async (req, res, next) => {
    // 確認是否拿到會員id
    const memberId = req.session.member.id;
    // const memberId = 1;

    let result = await connection.queryAsync(
        "SELECT id,payment_method,create_date,status,total_price FROM order_main_list WHERE member_id =? ORDER BY id DESC",
        [memberId]
    );

    // 訂單編號補足四位數字
    result = result.map((item) => {
        if (item.id < 10) item.id = "000" + item.id;
        if ((item.id < 100) & (item.id >= 10)) item.id = "00" + item.id;
        if ((item.id < 1000) & (item.id >= 100)) item.id = "0" + item.id;
        return item;
    });

    // 讓原本的日期可以增加天數
    const getDate = (rawDate, n) => {
        let newDate = moment(rawDate).add(n, "days").format("YYYY-MM-DD");
        return newDate;
    };

    // 把原本的陣列，新增兩個日期
    result = result.map((v) => {
        let shipmentDate = getDate(v.create_date, 3);
        let refundDate = getDate(v.create_date, 10);
        v["shipment_date"] = shipmentDate;
        v["refund_date"] = refundDate;
        return v;
    });

    // 取得該會員的總訂單數
    let count = await connection.queryAsync(
        "SELECT COUNT(*) AS count FROM order_main_list WHERE member_id =?",
        [memberId]
    );
    if (count.length > 0) {
        count = count[0];
    }
    res.json({ count, result });
});

router.post("/detail/:id", async (req, res, next) => {
    const memberId = req.session.member.id;
    // const memberId = 1;
    // console.log(memberId);
    let mainList = await connection.queryAsync(
        "SELECT * FROM order_main_list WHERE  member_id=? AND id =?",
        [memberId, req.params.id]
    );

    if (mainList.length > 0) {
        mainList = mainList[0];

        let result = await connection.queryAsync(
            "SELECT * FROM order_detail_list WHERE order_id =?",
            [[req.params.id]]
        );

        // 只抓到result有用到的product_id
        let productIds = result.map((v) => {
            return v.product_id;
        });
        // console.log(productIds);
        let result2 = await connection.queryAsync(
            "SELECT id,name,image FROM product WHERE id IN ?",
            [[productIds]]
        );

        res.json({ mainList, result, result2 });
    }
});

// 找出賣最好的商品
router.get("/top", async (req, res, next) => {
    let result = await connection.queryAsync(
        "SELECT a.id, a.category, a.name, a.image, a.info, SUM(b.amount) AS sum FROM product AS a INNER JOIN order_detail_list AS B ON a.id=b.product_id GROUP BY a.id ORDER BY sum DESC LIMIT 4"
    );
    res.json(result);
});

module.exports = router;
