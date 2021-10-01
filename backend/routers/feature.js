const express = require("express");
const connection = require("../utils/db");
const router = express.Router();

// 食譜首頁
router.get("/index/:typeid/:sort?", async function (req, res, next) {
  // console.log("req.params.typeid", req.params.typeid)
  // console.log("req.params.sort", req.params.sort)

  let sort = req.params.sort;

  // 可以檢查路由是否相通
  // console.log("route", 111);

  // 最新日期
  let sql =
    "SELECT a.id AS listId, a.type_id, a.name AS listName, a.qty, a.create_date, " +
    "b.id AS linkId, b.link, b.name AS linkName, b.img AS linkImg, " +
    "c.id AS imgid, c.feature_id AS imgfeatureid, GROUP_CONCAT(c.file_type ORDER BY c.file_type) AS featureimg, " +
    "(SELECT COUNT(member_id) FROM feature_like WHERE a.id=feature_id) AS likeqty, " +
    "(SELECT COUNT(member_id) FROM feature_view WHERE a.id=feature_id) AS viewqty, " +
    "(SELECT COUNT(member_id) FROM feature_save WHERE a.id=feature_id) AS saveqty " +
    " FROM feature_list AS a " +
    " INNER JOIN feature_link AS b ON a.link_id=b.id " +
    " INNER JOIN feature_img AS c ON a.id=c.feature_id " +
    " WHERE a.type_id=? " +
    " GROUP BY a.id";

  // 最新日期
  let newdate = await connection.queryAsync(
    sql + " ORDER BY create_date DESC",
    [req.params.typeid]
  );
  // 最舊日期
  let olddate = await connection.queryAsync(sql + " ORDER BY create_date", [
    req.params.typeid,
  ]);
  // 按讚數由多至少
  let maxlikeqty = await connection.queryAsync(sql + " ORDER BY likeqty DESC", [
    req.params.typeid,
  ]);
  // 按讚數由多至少
  let minlikeqty = await connection.queryAsync(sql + " ORDER BY likeqty", [
    req.params.typeid,
  ]);
  // 瀏覽數由多至少
  let maxviewqty = await connection.queryAsync(sql + " ORDER BY viewqty DESC", [
    req.params.typeid,
  ]);
  // 瀏覽數由少至多
  let minviewqty = await connection.queryAsync(sql + " ORDER BY viewqty", [
    req.params.typeid,
  ]);

  // 先測試第一筆資料是否轉成功arr
  // let featureimgarr=data[0].featureimg.split(",");

  // 將食譜圖片轉為陣列，用for迴圈將所有資料轉為陣列
  // for (let i = 0; i < data.length; i++) {
  //   data[i].featureimg = data[i].featureimg.split(",");
  // }

  // 要先查詢featureimg的上面格式
  // console.log("featureimg", data[0].featureimg)

  // 看兩者的格式是什麼
  // console.log("featureimgsplit", data[0].featureimg.split(","));
  // console.log("featureimgarr", featureimg);

  if (sort === "時間由舊至新") {
    for (let i = 0; i < olddate.length; i++) {
      olddate[i].featureimg = olddate[i].featureimg.split(",");
    }
    res.json(olddate);
  } else if (sort === "按讚數由多至少") {
    for (let i = 0; i < maxlikeqty.length; i++) {
      maxlikeqty[i].featureimg = maxlikeqty[i].featureimg.split(",");
    }
    res.json(maxlikeqty);
  } else if (sort === "按讚數由少至多") {
    for (let i = 0; i < minlikeqty.length; i++) {
      minlikeqty[i].featureimg = minlikeqty[i].featureimg.split(",");
    }
    res.json(minlikeqty);
  } else if (sort === "瀏覽數由多至少") {
    for (let i = 0; i < maxviewqty.length; i++) {
      maxviewqty[i].featureimg = maxviewqty[i].featureimg.split(",");
    }
    res.json(maxviewqty);
  } else if (sort === "瀏覽數由少至多") {
    for (let i = 0; i < minviewqty.length; i++) {
      minviewqty[i].featureimg = minviewqty[i].featureimg.split(",");
    }
    res.json(minviewqty);
  } else {
    for (let i = 0; i < newdate.length; i++) {
      newdate[i].featureimg = newdate[i].featureimg.split(",");
    }
    res.json(newdate);
  }

  // console.log("data", data);
  // res.json(data);
});

// 給食譜流程用
router.get("/steplist/:listId?", async function (req, res, next) {
  // 可以檢查路由是否相通
  // console.log("食譜流程通了", 222);

  let sql =
    "SELECT a.id AS listId, a.type_id, a.name AS listName, a.qty, a.create_date, " +
    "b.id AS linkId, b.link, b.name AS linkName, b.img AS linkImg, " +
    "c.id AS imgid, c.feature_id AS imgfeatureid, GROUP_CONCAT(c.file_type ORDER BY c.file_type) AS featureimg, " +
    "(SELECT COUNT(member_id) FROM feature_like WHERE a.id=feature_id) AS likeqty, " +
    "(SELECT COUNT(member_id) FROM feature_view WHERE a.id=feature_id) AS viewqty, " +
    "(SELECT COUNT(member_id) FROM feature_save WHERE a.id=feature_id) AS saveqty " +
    " FROM feature_list AS a " +
    " INNER JOIN feature_link AS b ON a.link_id=b.id " +
    " INNER JOIN feature_img AS c ON a.id=c.feature_id " +
    " WHERE a.id=? ";

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
router.post("/weeklist/:sort?", async function (req, res, next) {
  // 可以檢查路由是否相通
  console.log("一周食譜通了", 333);
  console.log("req.params.sort", req.params.sort);

  let sort = req.params.sort;

  // 1. 將 feature_list 和 weeklist JOIN
  let sql =
    "SELECT a.id AS listId, a.type_id, a.name AS listName, " +
    "b.id AS weeklistId, b.week_id AS weekid, b.feature_id AS weekfeatureid, b.order_date, " +
    "c.id AS weekId, c.first_date AS firstdate, " +
    "(SELECT COUNT(member_id) FROM feature_like WHERE a.id=feature_id) AS likeqty, " +
    "(SELECT COUNT(member_id) FROM feature_view WHERE a.id=feature_id) AS viewqty, " +
    "(SELECT COUNT(member_id) FROM feature_save WHERE a.id=feature_id) AS saveqty " +
    " FROM feature_list AS a " +
    " INNER JOIN feature_weeklist AS b ON a.id=b.feature_id " +
    " INNER JOIN feature_week AS c ON b.week_id=c.id ";

  // let data = await connection.queryAsync(sql);
  // 最新日期
  let newdate = await connection.queryAsync(sql + " ORDER BY b.week_id DESC");
  // console.log("newdate", newdate);
  // 最舊日期
  let olddate = await connection.queryAsync(sql + " ORDER BY b.week_id");

  // console.log(sql1);
  // let date = new Date().Format("MM-dd");

  // // 2. 把weeklist資料表以 week_id 為key，整理為一個物件裡有每一週的array
  // let weeklistarr = [];
  // for (let i = 0; i < 10; i++) {
  //   // 因為陣列是從0開始，但是weekId是從1開始，所以要讓這兩個值都是1開始
  //   let j = i + 1;
  //   // 將 week_id 篩選出來
  //   let newweeklist = data.filter((e) => e.weekId === j);
  //   weeklistarr[i] = newweeklist;
  // }

  if (sort === "時間由舊至新") {
    let weeklistarr = [];
    for (let i = 0; i < 10; i++) {
      let j = i + 1;
      let newweeklist = olddate.filter((e) => e.weekId === j);
      weeklistarr[i] = newweeklist;
    }
    res.json(weeklistarr);
    // console.log("weeklistarr", weeklistarr);
  } else {
    let weeklistarr = [];
    for (let i = 0; i < 10; i++) {
      let j = i + 1;
      let newweeklist = newdate.filter((e) => e.weekId === j);
      weeklistarr[i] = newweeklist;
    }
    res.json(weeklistarr.reverse());
    // console.log("weeklistarr", weeklistarr);
  }

  // console.log("weeklistarr", weeklistarr);
  // res.json(weeklistarr);
});

// 一周食譜index圖片
router.post("/weekindeximg/:sort?", async function (req, res, next) {
  // 可以檢查路由是否相通
  // console.log("一周食譜index圖片", 333);
  let sort = req.params.sort;

  let sql =
    // 1. 先用 week_id 排序 img 並建立新名稱做排序，接下來只要撈新名稱[1]
    // "SELECT id, feature_id, file_type, week_id," +
    // "ROW_NUMBER() Over " +
    // "(Partition By week_id Order By file_type Desc) As sortweeklist " +
    // "From feature_img";

    // 2. 只取新名稱第一個值
    "SELECT id, feature_id, file_type, week_id From " +
    "(SELECT id, feature_id, file_type, week_id," +
    "ROW_NUMBER() Over " +
    "(Partition By week_id Order By file_type) As sortweeklist " +
    "From feature_img WHERE IFNULL(week_id,'')  != 0) TMP_S " +
    "WHERE TMP_S.sortweeklist=1";

  // let data = await connection.queryAsync(sql);
  // 最新日期
  let newdate = await connection.queryAsync(sql + " ORDER BY week_id DESC");
  // console.log("newdate", newdate);
  // 最舊日期
  let olddate = await connection.queryAsync(sql + " ORDER BY week_id");
  // console.log("olddate", olddate);

  if (sort === "時間由舊至新") {
    res.json(olddate);
    // console.log("olddate", olddate);
  } else {
    res.json(newdate);
    // console.log("newdate.reverse()", newdate.reverse());
    // console.log("newdate", newdate);
  }

  // console.log("data", data);
  // res.json(data);
});

// stepweek
router.get("/stepweek/:weekId?", async function (req, res, next) {
  // 可以檢查路由是否相通
  console.log("通了勒", 333);

  // 1. 將 feature_list 和 weeklist JOIN
  let sql1 =
    "SELECT a.id AS listId, a.type_id, a.name AS listName, " +
    "b.id AS weeklistId, b.week_id AS weekid, b.feature_id AS weekfeatureid, b.order_date, " +
    "c.id AS weekId, c.first_date AS firstdate, " +
    "(SELECT COUNT(member_id) FROM feature_like WHERE a.id=feature_id) AS likeqty, " +
    "(SELECT COUNT(member_id) FROM feature_view WHERE a.id=feature_id) AS viewqty, " +
    "(SELECT COUNT(member_id) FROM feature_save WHERE a.id=feature_id) AS saveqty " +
    " FROM feature_list AS a " +
    " INNER JOIN feature_weeklist AS b ON a.id=b.feature_id " +
    " INNER JOIN feature_week AS c ON b.week_id=c.id " +
    " WHERE b.week_id=? ";

  let data = await connection.queryAsync(sql1, [req.params.weekId]);

  // console.log(sql1);
  // let date = new Date().Format("MM-dd");

  // 2. 把weeklist資料表以 week_id 為key，整理為一個物件裡有每一週的array
  // let weeklistarr = [];
  // for (let i = 0; i < 10; i++) {
  // 因為陣列是從0開始，但是weekId是從1開始，所以要讓這兩個值都是1開始
  // let j = i + 1;
  // 將 week_id 篩選出來
  // let newweeklist = data.filter((e) => e.weekId === j);
  // weeklistarr[i] = newweeklist;
  // let weekday = Object.values(weeklistarr[i])[8]
  // console.log(weekday);
  // console.log(weeklistarr);
  // }

  console.log("data", data);
  res.json(data);
});

// 一週食材準備
router.get("/prepweek/:weekId?", async function (req, res, next) {
  // 可以檢查路由是否相通
  // console.log("通了勒", 333);

  // 1. 將 feature_list 和 weeklist JOIN
  let sql = "SELECT * FROM feature_weekprep WHERE week_id=?";

  let data = await connection.queryAsync(sql, [req.params.weekId]);

  // console.log("data", data);
  res.json(data);
});

// 更新瀏覽數
router.get("/addview/:id", async function (req, res, next) {
  let memberId = 5;
  let sql = "INSERT INTO feature_view (feature_id, member_id) VALUES (?, ?)";
  let data = await connection.queryAsync(sql, [req.params.id, memberId]);
  res.send("success");
});

// 按讚的新增或刪除
router.get("/add-like/:listId", async function (req, res, next) {
  let memberId = 5;
  let sql = "INSERT INTO feature_like (feature_id, member_id) VALUES (?, ?)";
  let like = await connection.queryAsync(sql, [req.params.id, memberId]);

  res.json(like);
});
router.get("/remove-like/:listId", async function (req, res, next) {
  let memberId = 5;
  let sql = "DELETE FROM feature_like WHERE feature_id = ? AND member_id = ?";
  let like = await connection.queryAsync(sql, [req.params.id, memberId]);

  res.json(like);
});

// 按收藏的新增或刪除
router.get("/add-save/:id", async function (req, res, next) {
  let memberId = 5;
  let sql = "INSERT INTO feature_save (feature_id, member_id) VALUES (?, ?)";
  let save = await connection.queryAsync(sql, [req.params.id, memberId]);

  res.json(save);
});
router.get("/remove-save/:id", async function (req, res, next) {
  let memberId = 5;
  let sql = "DELETE FROM feature_save WHERE feature_id = ? AND member_id = ?";
  let save = await connection.queryAsync(sql, [req.params.id, memberId]);

  res.json(save);
});

module.exports = router;