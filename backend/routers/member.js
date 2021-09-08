const express = require("express");
const router = express.Router();
const { loginCheckMiddleware } = require("../middlewares/auth");

// 先檢查是否已登入
router.use(loginCheckMiddleware);
// do something

router.get("/editinfo", (req, res, next) => {
  res.send("Hello with member editinfo");
});

router.get("/", (req, res, next) => {
  res.send("Hello with member center");
});

module.exports = router;
