-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-09-09 09:41:25
-- 伺服器版本： 10.4.20-MariaDB
-- PHP 版本： 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `melees`
--

-- --------------------------------------------------------

--
-- 資料表結構 `order_main_list`
--

CREATE TABLE `order_main_list` (
  `id` int(4) NOT NULL,
  `member_id` int(4) NOT NULL COMMENT '使用者ID',
  `order_number` int(4) NOT NULL COMMENT '訂單編號',
  `name` int(11) NOT NULL COMMENT '收件人姓名',
  `phone` int(20) NOT NULL COMMENT '聯絡電話',
  `email` varchar(1000) NOT NULL COMMENT '聯絡信箱',
  `address` varchar(10000) NOT NULL COMMENT '寄送地址',
  `payment_method` int(4) NOT NULL COMMENT '付款方式',
  `create_date` date NOT NULL COMMENT '訂單成立日期',
  `status` int(4) NOT NULL COMMENT '訂單狀態',
  `total_price` int(6) NOT NULL COMMENT '總金額'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `order_main_list`
--
ALTER TABLE `order_main_list`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_main_list`
--
ALTER TABLE `order_main_list`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
