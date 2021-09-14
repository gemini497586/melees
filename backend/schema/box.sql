-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2021 年 09 月 14 日 17:50
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
(13, '義大利麵', 'pasta.png', 'pasta2.png', 131, NULL, '1'),
(14, '玉米筍', 'corn.png', 'corn2.png', 31, NULL, '1'),
(15, '炒飯', 'friedrice.png', 'friedrice2.png', 163, NULL, '1');

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
  `box_images` varchar(200) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `box_save`
--

INSERT INTO `box_save` (`id`, `member_id`, `box_ids`, `name`, `cal`, `box_images`, `create_at`) VALUES
(21, 1, '2,3', 'RubyRuby', 407, 'chicken2.png,pork2.png', '2021-09-12 11:19:50'),
(25, 1, '2,8,7,6,5', 'RubyCC', 562, 'chicken2.png,lettuce2.png,mushroom2.png,egg2.png,rice2.png', '2021-09-12 11:59:28'),
(26, 1, '10,12,13,11,9', 'CHENCHEN', 465, 'cabbage2.png,salmon2.png,pasta2.png,tofu2.png,broccoli2.png', '2021-09-12 11:59:47'),
(27, 1, '1,2,3,4,5', '好好好', 910, 'steak2.png,chicken2.png,pork2.png,shrimp2.png,rice2.png', '2021-09-12 14:09:58'),
(28, 1, '5,9,8,7,10', '十點整', 367, 'rice2.png,broccoli2.png,lettuce2.png,mushroom2.png,cabbage2.png', '2021-09-12 14:10:14'),
(29, 1, '10,9,8,7,6', '不好吃', 167, 'cabbage2.png,broccoli2.png,lettuce2.png,mushroom2.png,egg2.png', '2021-09-12 14:10:24'),
(30, 1, '3,4,9,6,13', '很餓', 581, 'pork2.png,shrimp2.png,broccoli2.png,egg2.png,pasta2.png', '2021-09-12 14:31:10'),
(31, 1, '8,9,7', '低GI', 62, 'lettuce2.png,broccoli2.png,mushroom2.png', '2021-09-12 14:31:31'),
(32, 1, '1,2,3,4', 'RubyCC', 630, 'steak2.png,chicken2.png,pork2.png,shrimp2.png', '2021-09-13 06:44:40'),
(33, 2, '2,3,5,7,8', '我是第二個', 724, 'chicken2.png,pork2.png,rice2.png,mushroom2.png,lettuce2.png', '2021-09-13 06:53:53'),
(34, 2, '10,9,8,7,6', '會員二', 167, 'cabbage2.png,broccoli2.png,lettuce2.png,mushroom2.png,egg2.png', '2021-09-13 06:54:48'),
(35, 2, '1', '', 120, 'steak2.png', '2021-09-13 14:35:44'),
(36, 2, '5,3,2,4,1', '今日便當', 910, 'rice2.png,pork2.png,chicken2.png,shrimp2.png,steak2.png', '2021-09-14 01:33:21'),
(37, 2, '13,7,8,9,10', '我是37號', 218, 'pasta2.png,mushroom2.png,lettuce2.png,broccoli2.png,cabbage2.png', '2021-09-14 01:33:48'),
(38, 37, '13,6,7,8,9', '我是37號', 273, 'pasta2.png,egg2.png,mushroom2.png,lettuce2.png,broccoli2.png', '2021-09-14 01:39:27'),
(39, 37, '5,9,8,10,11', '我的便當', 423, 'rice2.png,broccoli2.png,lettuce2.png,cabbage2.png,tofu2.png', '2021-09-14 01:39:41'),
(40, 37, '13,3,4,6,7', '9/14午餐', 576, 'pasta2.png,pork2.png,shrimp2.png,egg2.png,mushroom2.png', '2021-09-14 05:43:33'),
(41, 37, '15,6,12,11,10', '吃吃吃ㄔ吃', 552, 'friedrice2.png,egg2.png,salmon2.png,tofu2.png,cabbage2.png', '2021-09-14 05:52:53'),
(42, 37, '5,1,2,3,4', '卡路里爆表', 910, 'rice2.png,steak2.png,chicken2.png,pork2.png,shrimp2.png', '2021-09-14 05:53:16'),
(43, 38, '15,6,7,9,14', '第38號', 319, 'friedrice2.png,egg2.png,mushroom2.png,broccoli2.png,corn2.png', '2021-09-14 07:46:33'),
(44, 38, '5,6,1,9,12', '吃', 713, 'rice2.png,egg2.png,steak2.png,broccoli2.png,salmon2.png', '2021-09-14 07:47:08'),
(45, 37, '8,5', 'RubyRu', 297, 'lettuce2.png,rice2.png', '2021-09-14 09:43:04');

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
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `box_save`
--
ALTER TABLE `box_save`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
