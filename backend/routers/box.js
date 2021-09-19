const express = require("express");
const connection = require("../utils/db");
const router = express.Router();
const { loginCheckMiddleware } = require("../middlewares/auth");
const moment = require("moment");
const { response } = require("express");

router.get("/", async (req, res, next) => {
    let result = await connection.queryAsync(
        "SELECT * FROM box WHERE id NOT IN (5,8,13,15,16)"
    );
    let result2 = await connection.queryAsync(
        "SELECT * FROM box WHERE id IN (5,8,13,15,16)"
    );
    res.json({ result, result2 });
});

module.exports = router;
