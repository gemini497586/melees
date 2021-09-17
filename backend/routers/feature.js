const express = require("express");
const connection = require("../utils/db");
const router = express.Router();

// index
// 網址後面加上字元抓變數(加上問號代表不一定需要有這變數)，前面加上冒號代表feature/任一個字元都會進來
// router.get("/index/:typeid?", async function (req, res, next) {
//   const queryData = req.query;
//   let listTable = await connection.queryAsync(
//     `SELECT * FROM feature_list WHERE type_id=${req.params.typeid}`
//   );
//   console.log("111", req.params.typeid);
//   let linkTable = await connection.queryAsync("select * from feature_link");
//   let typeTable = await connection.queryAsync("select * from feature_type");

//   let returnDatas = listTable.map((listData) => {
//     listData.link = linkTable.filter(
//       (linkData) => listData["link_id"] === linkData["id"]
//     );
//     listData.type = typeTable.filter(
//       (typeData) => listData["type_id"] === typeData["id"]
//     );
//     return listData
//   });
//   console.table(returnDatas);
//   res.json(returnDatas);
// });

router.get("/index/:typeid?", async function (req, res, next) {
  // 可以檢查路由是否相通
  console.log("route", 111);

  let sql = " SELECT a.id AS listId, a.type_id, a.name AS listName, a.qty, a.create_date, b.id AS linkId, b.link, b.name AS linkName, b.img AS linkImg FROM feature_list AS a INNER JOIN feature_link AS b ON a.link_id=b.id WHERE a.type_id=? ORDER BY create_date DESC"

  let data = await connection.queryAsync(sql, [req.params.typeid])
  // console.log("data", data);
  res.json(data)

});

// week
// 網址後面加上字元抓變數(加上問號代表不一定需要有這變數)，前面加上冒號代表feature/任一個字元都會進來
// router.get("/week", async function (req, res, next) {
//   const queryData = req.query;
//   console.log( "SELECT * FROM feature_list")
//   let listTable = await connection.queryAsync(
//     "SELECT * FROM feature_list"
//   );
//   let linkTable = await connection.queryAsync("select * from feature_link");
//   let typeTable = await connection.queryAsync("select * from feature_type");

//   let returnDatas = listTable.map((listData) => {
//     listData.link = linkTable.filter(
//       (linkData) => listData["link_id"] === linkData["id"]
//     );
//     listData.type = typeTable.filter(
//       (typeData) => listData["type_id"] === typeData["id"]
//     );
//     return listData
//   });
//   console.table(returnDatas);
//   res.json(returnDatas);
// });



// router.get("/index/step", async function (req, res, next) {
//   const queryData = req.query;
//   let listQuery = "";
//   if (queryData.id) {
//     listQuery = ` where id = ${queryData.id}`;
//   }
//   console.log( "SELECT * FROM feature_list" + listQuery)
//   let listTable = await connection.queryAsync(
//     "SELECT * FROM feature_list" + listQuery
//   );
//   let linkTable = await connection.queryAsync("select * from feature_link");
//   console.table(listTable);
//   console.table(linkTable);

//   let returnDatas = listTable.map((listData) => {
//     listData.link = linkTable.filter(
//       (linkData) => listData["link_id"] === linkData["id"]
//     );
//     return listData;
//   });
//   console.table(returnDatas);
//   res.json(returnDatas);
// });

module.exports = router;
