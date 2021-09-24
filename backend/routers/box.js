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

router.get("/recommend", async (req, res, next) => {
    
    let result = await connection.queryAsync(
        "SELECT * FROM product WHERE category = 1 ORDER BY price DESC LIMIT 4 "
    );
    res.json(result);
});

module.exports = router;
