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

    let countsIds = counts.map((v) => {
        return v.listId;
    });

    let sql1 =
        "SELECT feature_id, file_type " +
        "FROM feature_img " +
        "WHERE feature_id IN ? " +
        "ORDER BY id ";

    let imgs = await connection.queryAsync(sql1, [[countsIds]]);

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

  // console.log("data: ", data);
  res.json(data);
});

// 私藏
router.get("/private", async (req, res, next) => {
  
  // 搜尋瀏覽數最多的前五個
  let sql = "SELECT private_id, count(*) as count FROM private_view GROUP BY private_id ORDER BY count DESC LIMIT 5"
  let result = await connection.queryAsync(sql)
  
  let privateId = result.map((value) => {
    return value.private_id
  })

  // 撈出前五個食譜資料
  let sql2 = "SELECT * FROM private_recipe WHERE id IN ?"
  let private = await connection.queryAsync(sql2, [[privateId]])

  res.json(private)
})

// 商城
router.get("/market", async (req, res, next) => {
    // 先找到收藏最高的四個id
    let saved = await connection.queryAsync(
        "SELECT product_id, COUNT(*) AS count FROM product_save GROUP BY product_id ORDER BY count DESC LIMIT 4"
    );

    let savedIds = saved.map((v) => {
        return v.product_id;
    });

    // 找到那四個id的商品內容
    let product = await connection.queryAsync(
        "SELECT a.*, COUNT(b.member_id) AS save_qty FROM product AS a INNER JOIN product_save AS b ON a.id=b.product_id WHERE a.id IN ? GROUP BY a.id ORDER BY save_qty DESC",
        [[savedIds]]
    );
    res.json(product);
});

module.exports = router;
