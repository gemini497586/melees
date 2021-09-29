-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2021 年 09 月 27 日 18:03
-- 伺服器版本： 10.4.19-MariaDB
-- PHP 版本： 8.0.7

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
-- 資料表結構 `box`
--

CREATE TABLE `box` (
  `id` int(3) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  `inside_image` varchar(50) NOT NULL,
  `cal` int(5) UNSIGNED NOT NULL,
  `product_id` varchar(1000) DEFAULT NULL,
  `valid` varchar(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `box`
--

INSERT INTO `box` (`id`, `name`, `image`, `inside_image`, `cal`, `product_id`, `valid`) VALUES
(1, '牛排', 'steak.png', 'steak2.png', 120, NULL, '1'),
(2, '雞胸肉', 'chicken.png', 'chicken2.png', 165, NULL, '1'),
(3, '豬肉', 'pork.png', 'pork2.png', 242, NULL, '1'),
(4, '白蝦', 'shrimp.png', 'shrimp2.png', 103, NULL, '1'),
(5, '白飯', 'rice.png', 'rice2.png', 280, NULL, '1'),
(6, '水煮蛋', 'egg.png', 'egg2.png', 80, NULL, '1'),
(7, '香菇', 'mushroom.png', 'mushroom2.png', 20, NULL, '1'),
(8, '生菜', 'lettuce.png', 'lettuce2.png', 17, NULL, '1'),
(9, '花椰菜', 'broccoli.png', 'broccoli2.png', 25, NULL, '1'),
(10, '高麗菜', 'cabbage.png', 'cabbage2.png', 25, NULL, '1'),
(11, '豆腐', 'tofu.png', 'tofu2.png', 76, NULL, '1'),
(12, '鮭魚', 'salmon.png', 'salmon2.png', 208, NULL, '1'),
(13, '義大利麵', 'pasta.png', 'pasta2.png', 371, NULL, '1'),
(14, '玉米筍', 'corn.png', 'corn2.png', 31, NULL, '1'),
(15, '炒飯', 'friedrice.png', 'friedrice2.png', 163, NULL, '1'),
(16, '義大利麵(直麵)', 'spaghetti.png', 'spaghetti2.png', 158, NULL, '1');

-- --------------------------------------------------------

--
-- 資料表結構 `box_save`
--

CREATE TABLE `box_save` (
  `id` int(10) UNSIGNED NOT NULL,
  `member_id` int(5) UNSIGNED NOT NULL,
  `box_ids` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `cal` int(5) UNSIGNED NOT NULL,
  `create_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `box_save`
--

INSERT INTO `box_save` (`id`, `member_id`, `box_ids`, `name`, `cal`, `create_at`) VALUES
(1, 2, '5', 'test', 280, '2021-09-27'),
(2, 1, '6', 'test', 80, '2021-09-27'),
(3, 1, '13', 'RubyRuby', 371, '2021-09-27'),
(4, 1, '13', 'Ruby', 371, '2021-09-27'),
(5, 1, '8', 'Ruby', 17, '2021-09-27'),
(6, 1, '8,13,15,5,16', 'test', 989, '2021-09-27'),
(7, 1, '2,1,3,6', 'test', 607, '2021-09-27'),
(8, 1, '15,6,7,9', 'test', 288, '2021-09-27');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `box`
--
ALTER TABLE `box`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `box_save`
--
ALTER TABLE `box_save`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `box`
--
ALTER TABLE `box`
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `box_save`
--
ALTER TABLE `box_save`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
