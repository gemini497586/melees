const mysql = require("mysql");
require("dotenv").config();
const Promise = require("bluebird");

//先確認是否如實抓到.env檔
// console.log({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   port: process.env.DB_PORT,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   connectionLimit: process.env.CONNECTION_LIMIT || 10,
//   dateStrings: true,
// });

let pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: process.env.CONNECTION_LIMIT || 10,
  dateStrings: true,
});

pool = Promise.promisifyAll(pool);
module.exports = pool;
