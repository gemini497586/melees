-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2021 年 10 月 03 日 16:09
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
  `product_id` int(5) UNSIGNED DEFAULT NULL,
  `valid` varchar(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `box`
--

INSERT INTO `box` (`id`, `name`, `image`, `inside_image`, `cal`, `product_id`, `valid`) VALUES
(1, '牛排', 'steak.png', 'steak2.png', 120, 2, '1'),
(2, '雞胸肉', 'chicken.png', 'chicken2.png', 165, 12, '1'),
(3, '豬肉', 'pork.png', 'pork2.png', 242, 8, '1'),
(4, '白蝦', 'shrimp.png', 'shrimp2.png', 103, 17, '1'),
(5, '白飯', 'rice.png', 'rice2.png', 280, 10, '1'),
(6, '水煮蛋', 'egg.png', 'egg2.png', 80, 15, '1'),
(7, '香菇', 'mushroom.png', 'mushroom2.png', 20, 19, '1'),
(8, '生菜', 'lettuce.png', 'lettuce2.png', 17, 16, '1'),
(9, '花椰菜', 'broccoli.png', 'broccoli2.png', 25, 16, '1'),
(10, '高麗菜', 'cabbage.png', 'cabbage2.png', 25, 16, '1'),
(11, '豆腐', 'tofu.png', 'tofu2.png', 76, 20, '1'),
(12, '鮭魚', 'salmon.png', 'salmon2.png', 208, 1, '1'),
(13, '炒飯', 'friedrice.png', 'friedrice2.png', 163, 10, '1'),
(14, '玉米筍', 'corn.png', 'corn2.png', 31, 14, '1'),
(15, '義大利麵', 'pasta.png', 'pasta2.png', 371, 1, '1'),
(16, '義大利麵(直麵)', 'spaghetti.png', 'spaghetti2.png', 158, 1, '1');

-- --------------------------------------------------------

--
-- 資料表結構 `box_save_detail`
--

CREATE TABLE `box_save_detail` (
  `id` int(5) UNSIGNED NOT NULL,
  `save_id` int(5) NOT NULL,
  `box_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `box_save_detail`
--

INSERT INTO `box_save_detail` (`id`, `save_id`, `box_id`) VALUES
(1, 1, 5),
(2, 1, 1),
(3, 1, 9),
(4, 1, 14),
(5, 2, 15),
(6, 2, 9),
(7, 2, 12),
(8, 2, 11),
(9, 3, 5),
(10, 3, 7),
(11, 3, 6),
(12, 3, 4),
(13, 3, 3),
(14, 4, 8),
(15, 4, 6),
(16, 4, 7),
(17, 4, 12),
(18, 4, 14),
(19, 5, 16),
(20, 5, 6),
(21, 5, 3),
(22, 5, 2),
(23, 5, 1),
(24, 6, 13),
(25, 6, 6),
(26, 6, 4),
(27, 6, 3),
(28, 7, 13),
(29, 7, 6),
(30, 7, 4),
(31, 7, 3),
(32, 8, 7),
(33, 8, 6),
(34, 8, 4),
(35, 9, 8),
(36, 9, 12),
(37, 9, 11),
(38, 9, 10),
(39, 9, 9),
(40, 10, 5),
(41, 10, 12),
(42, 10, 14),
(43, 10, 9),
(44, 10, 10),
(45, 11, 13),
(46, 11, 4),
(47, 11, 2),
(48, 11, 6),
(49, 11, 7);

-- --------------------------------------------------------

--
-- 資料表結構 `box_save_main`
--

CREATE TABLE `box_save_main` (
  `id` int(5) UNSIGNED NOT NULL,
  `member_id` int(5) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `cal` int(5) UNSIGNED NOT NULL,
  `create_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `box_save_main`
--

INSERT INTO `box_save_main` (`id`, `member_id`, `name`, `cal`, `create_date`) VALUES
(1, 1, '17:10', 456, '2021-10-02'),
(2, 1, '1711', 472, '2021-10-02'),
(3, 1, '1712', 725, '2021-10-02'),
(4, 2, 'test', 356, '2021-10-02'),
(5, 1, 'test', 765, '2021-10-02'),
(6, 2, '16:05', 588, '2021-10-03'),
(7, 3, '16:06', 588, '2021-10-03'),
(8, 3, 'test', 203, '2021-10-03'),
(9, 5, '10/03', 351, '2021-10-03'),
(10, 5, '10/03', 569, '2021-10-03'),
(11, 4, '16:08', 531, '2021-10-03');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `box`
--
ALTER TABLE `box`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `box_save_detail`
--
ALTER TABLE `box_save_detail`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `box_save_main`
--
ALTER TABLE `box_save_main`
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
-- 使用資料表自動遞增(AUTO_INCREMENT) `box_save_detail`
--
ALTER TABLE `box_save_detail`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `box_save_main`
--
ALTER TABLE `box_save_main`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
