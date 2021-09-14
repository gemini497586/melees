const express = require("express");
const connection = require("../utils/db");
const router = express.Router();
const { loginCheckMiddleware } = require("../middlewares/auth");

router.get("/", async (req, res, next) => {
    let result = await connection.queryAsync(
        "SELECT * FROM order_main_list ORDER BY create_date DESC"
    );
    res.json(result);
});

router.get("/detail/:order_number", async (req, res, next) => {
    let result = await connection.queryAsync(
        "SELECT * FROM order_detail_list WHERE order_id =?",
        [req.params.order_number]
    );
    res.json(result);
});

module.exports = router;
