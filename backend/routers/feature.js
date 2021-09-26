const express = require("express");
const connection = require("../utils/db");
const router = express.Router();

router.get("/index/:typeid?", async function (req, res, next) {
  // 可以檢查路由是否相通
  // console.log("route", 111);

  let sql =
    " SELECT a.id AS listId, a.type_id, a.name AS listName, a.qty, a.create_date, b.id AS linkId, b.link, b.name AS linkName, b.img AS linkImg, c.id AS imgid, c.feature_id AS imgfeatureid, GROUP_CONCAT(c.file_type ORDER BY c.file_type) AS featureimg FROM feature_list AS a INNER JOIN feature_link AS b ON a.link_id=b.id INNER JOIN feature_img AS c ON a.id=c.feature_id WHERE a.type_id=? GROUP BY a.id ORDER BY create_date DESC";

  let data = await connection.queryAsync(sql, [req.params.typeid]);

  // 先測試第一筆資料是否轉成功arr
  // let featureimgarr=data[0].featureimg.split(",");

  // 將食譜圖片轉為陣列，用for迴圈將所有資料轉為陣列
  for (let i = 0; i < data.length; i++) {
    data[i].featureimg = data[i].featureimg.split(",");
  }

  // 要先查詢featureimg的上面格式
  // console.log("featureimg", data[0].featureimg)

  // 看兩者的格式是什麼
  // console.log("featureimgsplit", data[0].featureimg.split(","));
  // console.log("featureimgarr", featureimg);

  // console.log("data", data);
  res.json(data);
});

// 給食譜流程用
router.get("/steplist/:listId?", async function (req, res, next) {
  // 可以檢查路由是否相通
  // console.log("食譜流程通了", 222);

  let sql =
    ' SELECT a.id AS listId, a.type_id, a.name AS listName, a.qty, a.create_date, ' +
    ' b.id AS linkId, b.link, b.name AS linkName, b.img AS linkImg, ' +
    ' c.id AS imgid, c.feature_id AS imgfeatureid, GROUP_CONCAT(c.file_type ORDER BY c.file_type) AS featureimg ' +
    ' FROM feature_list AS a ' +
    ' INNER JOIN feature_link AS b ON a.link_id=b.id '+ 
    ' INNER JOIN feature_img AS c ON a.id=c.feature_id ' +
    ' WHERE a.id=?';

  let data = await connection.queryAsync(sql, [req.params.listId]);

  // 將食譜圖片轉為陣列，用for迴圈將所有資料轉為陣列
  for (let i = 0; i < data.length; i++) {
    data[i].featureimg = data[i].featureimg.split(",");
  }

  // console.log("data", data);
  res.json(data);
});

// 給步驟用
router.get("/step/:listId?", async function (req, res, next) {
  // 可以檢查路由是否相通
  // console.log("食譜步驟通了", 222);

  let sql =
    " SELECT a.id AS listId, b.id AS stepId, b.feature_id, b.step AS steps FROM feature_list AS a INNER JOIN feature_step AS b ON a.id=b.feature_id WHERE a.id=?";

  let data = await connection.queryAsync(sql, [req.params.listId]);

  // console.log("data", data);
  res.json(data);
});

// 給食材準備用
router.get("/prep/:listId?", async function (req, res, next) {
  // 可以檢查路由是否相通
  // console.log("食材準備通了", 333);

  let sql =
    " SELECT a.id AS listId, b.id AS stepId, b.feature_id, b.prep AS ingred, b.unit AS ingred_unit FROM feature_list AS a INNER JOIN feature_prep AS b ON a.id=b.feature_id WHERE a.id=?";

  // 如果sql有 WHERE a.id=? 就要寫上 [req.params.listId]，裡面有幾個資料要看where有帶幾個問號
  let data = await connection.queryAsync(sql, [req.params.listId]);

  // console.log("data", data);
  res.json(data);
});

// 一周食譜
router.post("/weeklist", async function (req, res, next) {
  // 可以檢查路由是否相通
  // console.log("一周食譜通了", 333);

  // 1. 將 feature_list 和 weeklist JOIN
  let sql1 =
    "SELECT a.id AS listId, a.type_id, a.name AS listName, b.id AS weeklistId, b.week_id AS weekid, b.feature_id AS weekfeatureid, b.order_date, c.id AS weekId, c.first_date AS firstdate FROM feature_list AS a INNER JOIN feature_weeklist AS b ON a.id=b.feature_id INNER JOIN feature_week AS c ON b.week_id=c.id";

  let data = await connection.queryAsync(sql1);

  // console.log(sql1);
  // let date = new Date().Format("MM-dd");

  // 2. 把weeklist資料表以 week_id 為key，整理為一個物件裡有每一週的array
  let weeklistarr = [];
  for (let i = 0; i < 10; i++) {
    // 因為陣列是從0開始，但是weekId是從1開始，所以要讓這兩個值都是1開始
    let j = i + 1;
    // 將 week_id 篩選出來
    let newweeklist = data.filter((e) => e.weekId === j);
    weeklistarr[i] = newweeklist;
    // let weekday = Object.values(weeklistarr[i])[8]
    // console.log(weekday);
    // console.log(weeklistarr);
  }

  // let weekday = weeklistarr.map(weeklistarr => Object.values(weeklistarr[0])[8]);
  // console.log("weekday", weekday);
  // for (let i = 0; i < 5; i++) {
  //   result.setDate(result.getDate() + i)
  //   let result = new Date(weekday)
  //   console.log('date1111', result)
  // }

  // 3. 做feature_weeklist order_date 一周五天的排序 1,2,3,4,5
  // 2. 排序 feature_week 每周的倒敘 ORDER BY c.first_date desc

  // 2. 排序 feature_week 每周的倒敘 ORDER BY c.first_date desc 4,3,2,1
  // let sql2 = "SELECT * FROM feature_week ORDER BY first_date desc"
  // let firstdate = await connection.queryAsync(sql1, [req.params.weekid])
  // console.log("firstdate", firstdate);

  // 3. 做feature_weeklist order_date 一周五天的排序 1,2,3,4,5
  // let sql2 = "SELECT * FROM feature_weeklist ORDER BY order_date"
  // let orderdesc = await connection.queryAsync(sql2, [req.params.weekid])
  // console.log("orderdesc", orderdesc);

  // 3. 把weeklist資料表以 week_id 為key，整理為一個物件裡有每一週的array
  // let weeklistarr = {}
  // for (let i=1; i<=10; i++) {
  // 將 week_id 篩選出來
  // let newweeklist = orderdesc.filter((e) => e.week_id === i);
  // weeklistarr[i] = newweeklist;
  // }

  // console.log("weeklistarr", weeklistarr);
  res.json(weeklistarr);
});

// 一周食譜index圖片
// router.post("/weekimg", async function (req, res, next) {
//   可以檢查路由是否相通
//   console.log("一周食譜index圖片", 333);

//   let sql =
//     " SELECT a.id AS imgid, a.feature_id AS imgfeatureid, a.file_type, b.id AS weeklistId, b.week_id AS weekid, b.feature_id AS weeklistfeatureid FROM feature_img AS a INNER JOIN feature_weeklist AS b ON a.feature_id=b.id ";

//   let data = await connection.queryAsync(sql);

//   console.log("data", data);
//   res.json(data);
// });

module.exports = router;
