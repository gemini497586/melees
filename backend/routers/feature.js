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

  let sql = " SELECT a.id AS listId, a.type_id, a.name AS listName, a.qty, a.create_date, b.id AS linkId, b.link, b.name AS linkName, b.img AS linkImg, c.id AS imgid, c.feature_id AS imgfeatureid, GROUP_CONCAT(c.file_type ORDER BY c.file_type) AS featureimg FROM feature_list AS a INNER JOIN feature_link AS b ON a.link_id=b.id INNER JOIN feature_img AS c ON a.id=c.feature_id WHERE a.type_id=? GROUP BY a.id ORDER BY create_date DESC"

  let data = await connection.queryAsync(sql, [req.params.typeid])

  // 先測試第一筆資料是否轉成功arr
  // let featureimgarr=data[0].featureimg.split(",");

  // 將食譜圖片轉為陣列，用for迴圈將所有資料轉為陣列
for(let i=0; i<data.length; i++) {
  data[i].featureimg = data[i].featureimg.split(",");  
}

// 要先查詢featureimg的上面格式
// console.log("featureimg", data[0].featureimg) 

// 看兩者的格式是什麼
// console.log("featureimgsplit", data[0].featureimg.split(","));
// console.log("featureimgarr", featureimg);

  // console.log("data", data);
  res.json(data)

});

// 給食譜流程用
router.get("/step/:listId?", async function (req, res, next) {
  // 可以檢查路由是否相通
  // console.log("食譜流程通了", 222);

  let sql = " SELECT a.id AS listId, a.type_id, a.name AS listName, a.qty, a.create_date, b.id AS linkId, b.link, b.name AS linkName, b.img AS linkImg, c.id AS imgid, c.feature_id AS imgfeatureid, GROUP_CONCAT(c.file_type ORDER BY c.file_type) AS featureimg FROM feature_list AS a INNER JOIN feature_link AS b ON a.link_id=b.id INNER JOIN feature_img AS c ON a.id=c.feature_id WHERE a.id=?"

  let data = await connection.queryAsync(sql, [req.params.listId])

  // 將食譜圖片轉為陣列，用for迴圈將所有資料轉為陣列
for(let i=0; i<data.length; i++) {
  data[i].featureimg = data[i].featureimg.split(",");  
}

console.log("data", data);
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
