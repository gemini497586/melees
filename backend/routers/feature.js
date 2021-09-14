const express = require("express");
const connection = require("../utils/db");
const router = express.Router();

router.get("/index", async function (req, res, next) {
  const queryData = req.query;
  console.log( "SELECT * FROM feature_list")
  let listTable = await connection.queryAsync(
    "SELECT * FROM feature_list"
  );
  let linkTable = await connection.queryAsync("select * from feature_link");
  let typeTable = await connection.queryAsync("select * from feature_type");
  console.table(listTable);
  console.table(linkTable);
  console.table(typeTable);

  let returnDatas = listTable.map((listData) => {
    listData.link = linkTable.filter(
      (linkData) => listData["link_id"] === linkData["id"]
    );
    listData.type = typeTable.filter(
      (typeData) => listData["type_id"] === typeData["id"]
    );
    return listData
  });
  console.table(returnDatas);
  res.json(returnDatas);
});


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
