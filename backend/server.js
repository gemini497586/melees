const express = require("express");
const connection = require("./utils/db");
const path = require("path");
require("dotenv").config();
let app = express();

// 處理 cors 問題
// 後端必須要開放、允許跨源請求
// 這樣跨源的前端才不會被瀏覽器擋下來
const cors = require("cors");
app.use(
    cors({
        origin: ["http://localhost:3000"],
        // 跨源送 cookie
        // 如果要把 credentials 設成 true, 那 origin 就不能是 *
        // 不然誰都可以跨源送 cookie
        credentials: true,
    })
);

// // 告訴 express 我們用哪一種樣板語言
// // 樣板語言其實不止一種
// app.set("view engine", "pug");
// // 告訴 express 我們的樣板檔案放在哪裡
// app.set("views", path.join(__dirname, "views"));

// 啟用 session 機制
const expressSession = require("express-session");
app.use(
    expressSession({
        // 設定session加密密碼 --> 記得新增.env的設定(參考.example的SESSION_SECRET)
        secret: process.env.SESSION_SECRET,
        resave: false,
    })
);

// 使用這個中間件，才可以讀到 body 的資料
app.use(express.urlencoded({ extended: true }));
// 使用這個中間件，才可以解析到 json 的資料
app.use(express.json());
// 使用這個中間件，才可以設定靜態檔案的位置
app.use(express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
    let current = new Date();
    console.log(`有人來訪問嚕 at ${current.toISOString()}`);
    next();
});

app.get("/", (req, res, next) => {
    res.send("Hello with nodemon");
});

app.get("/market/product/:id", (req, res, next) => {
    let sqlSelectID = "SELECT * FROM product WHERE id = ?";
    console.log("商品", req.params.id);
    connection.query(sqlSelectID, req.params.id, (err, result) => {
        res.json(result);
    });
});

app.get("/market/:category?", (req, res, next) => {
    if (req.params.category === "undefined") {
        connection.query("SELECT * FROM product", (err, result) => {
            // console.log("select All");
            res.json(result);
        });
    } else {
        connection.query(
            "SELECT * FROM product WHERE category = ?",
            req.params.category,
            (err, result) => {
                // console.log(req.params.category);
                res.json(result);
            }
        );
    }
});

// app.get("/market", (req, res, next) => {
//   let sqlSelectAll = "SELECT * FROM product";
//   connection.query(sqlSelectAll, (err, result) => {
//     res.json(result);
//   });
// });

// 引入 auth router 中間件，包含資料驗證、登入、註冊
let authRouter = require("./routers/auth");
app.use("/auth", authRouter);

// 引入 member router 中間件，包含會員專區功能
let memberRouter = require("./routers/member");
app.use("/member", memberRouter);

// 引入 private router 中間件，包含私藏食譜
let privateRouter = require("./routers/private");
app.use("/api/private", privateRouter);

// 引入 box router 中間件，包含客製化便當
let boxRouter = require("./routers/box");
app.use("/box", boxRouter);

// 前面都沒有任何符合的路由網址就進入這邊統一 404 來處理
app.use((req, res, next) => {
    console.log("都沒有符合的路由，請查明後再 keyin!");
    next();
});
app.use((req, res, next) => {
    res.status(404).json({ message: "NOT FOUND" });
});

// multer 用來處理 From-data (Content-Type: multipart/form-data)
const multer = require("multer");
app.use((err, req, res, next) => {
    // multer 丟出來的 exception 不符合我們制定的格式
    console.error("來自四個參數的錯誤處理", err);
    // 判斷這個 err 來自哪一個
    if (err instanceof multer.MulterError) {
        // 到這裡表示我們知道這一次來的 err 其實是 MulterError
        // 而且我們有觀察到 MulterError 有一個 code 可以辨別錯誤
        if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({ message: "檔案太大啦" });
        }
        return res.status(400).json({ message: err.message });
    }
    res.status(err.status).json({ message: err.message });
});

const port = 3001;
app.listen(port, () => {
    console.log(`我們的 web server: ${port} 啟動了～`);
});
