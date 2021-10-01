const express = require("express");
const connection = require("../utils/db");
const router = express.Router();

// 首頁精選
router.get("/feature", async function (req, res, next) {
  // 可以檢查路由是否相通
  console.log("通了", 222);

  let sql =
    // "SELECT feature_id, COUNT(feature_id) AS count FROM feature_save GROUP BY feature_id  ORDER BY COUNT(feature_id) DESC LIMIT 6";
    // 51, 8, 2, 10, 47, 37

    "SELECT a.id AS listId, a.type_id, a.name AS listName, " +
    "b.link, b.name AS linkName, b.img AS linkImg, " +
    "(SELECT COUNT(feature_id) FROM feature_save WHERE a.id=feature_id) AS saveqty " +
    " FROM feature_list AS a " +
    " INNER JOIN feature_link AS b ON a.link_id=b.id " +
    " ORDER BY saveqty DESC LIMIT 5 ";

  let counts = await connection.queryAsync(sql);
  // let counts = await connection.queryAsync(sql);
  // let featureIds = counts.map((item) => {
  //   return item.feature_id;
  // });

  let sql1 =
    "SELECT feature_id, file_type " +
    "FROM feature_img " +
    "WHERE feature_id IN (51, 8, 2, 10, 47) " +
    "ORDER BY id ";

  let imgs = await connection.queryAsync(sql1, [counts]);

  
  let data = counts.map((item) => {
    // {
    //   "listId": 51,
    //   "type_id": 3,
    //   "listName": "蒜香蛤蜊炒烏龍",
    //   "linkId": 2,
    //   "link": "https://www.instagram.com/dulahoop12/",
    //   "linkName": "便當調色盤 | Della & Joey",
    //   "linkImg": "link02.jpeg",
    //   "saveqty": 5
    //   },
    // find 回傳符合條件的第一個元素
    item.img = imgs.find((img) => {
      return img.feature_id == item.listId;
    });
    return item;
  });

  // let data = counts.map((item) => {
  //   {
  //   // find 回傳符合條件的第一個元素
  //   item.img = imgs.find((img) => {
  //     return img.feature_id == item.feature_id;
  //   });
  //   return item;
  // });

  console.log("data: ", data);
  res.json(data);
});

module.exports = router;
