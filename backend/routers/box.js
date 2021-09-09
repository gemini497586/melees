const express = require("express");
const connection = require("../utils/db");
const router = express.Router();

router.get("/", async (res, req, next) => {
    let result = await connection.queryAsync("SELECT * FROM box");
    res.json(result);
});

module.exports = router;
