const express = require("express");
const connection = require("../utils/db");
const router = express.Router();
const { loginCheckMiddleware } = require("../middlewares/auth");

// 登入才可以使用
router.use(loginCheckMiddleware);

router.get("/", async (req, res, next) => {
    // 確認是否拿到會員id
    const memberId = req.session.member.id;
    // const memberId = 37;
    console.log(memberId);
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

    // 把日期轉成數字樣式 2021-09-24
    const transformDate = (rawDate, n) => {
        rawDate.setDate(rawDate.getDate() + n);
        let year = rawDate.getFullYear();
        let month = rawDate.getMonth() + 1;
        if (month < 10) month = "0" + month;
        let date = rawDate.getDate();
        if (date < 10) date = "0" + date;
        let newDate = `${year}-${month}-${date}`;
        return newDate;
    };

    // 把原本的陣列，新增兩個日期
    result = result.map((v) => {
        let rawDate = new Date(v.create_date);
        let shipmentDate = transformDate(rawDate, 3);
        let refundDate = transformDate(rawDate, 10);
        v["shipment_date"] = shipmentDate;
        v["refund_date"] = refundDate;
        return v;
    });

    let count = await connection.queryAsync(
        "SELECT COUNT(*) AS count FROM order_main_list WHERE member_id =?",
        [memberId]
    );
    if (count.length > 0) {
        count = count[0];
    }
    res.json({ count, result });
});

router.get("/detail/:id", async (req, res, next) => {
    const memberId = req.session.member.id;
    // const memberId = 37;
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

    // 只抓到result有用到的product_id
    // let productIds = result.map((v) => {
    //     return v.product_id;
    // });
    // // console.log(productIds);
    // let result2 = await connection.queryAsync(
    //     "SELECT id,name FROM product WHERE id IN ?",
    //     [[productIds]]
    // );

    // res.json({ mainList, result2 });
});

module.exports = router;
