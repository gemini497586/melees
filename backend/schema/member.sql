-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2021 年 09 月 13 日 15:43
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
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `id` int(6) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nickname` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `account` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `phone` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `picture` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT 'default_userPic.png',
  `create_date` date DEFAULT NULL,
  `valid` int(3) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`id`, `name`, `nickname`, `account`, `password`, `gender`, `birthday`, `phone`, `email`, `address`, `picture`, `create_date`, `valid`) VALUES
(36, 'meleesadmintester', '管理員', 'meleesadmintestertest', '$2b$10$6nZ1jYsfkGAZT4tZEY0wbeMXBKc/vAbMyYyvJV2sSq0m8vzgLL1HS', '男', '1991-09-08', '0988456654', 'meleestest@gmail.com', '桃園市中壢區中央路300號', '/143b0047-594b-4f82-bea5-a5e7ebfd8ca8.png', '2021-09-13', 1),
(37, 'meleesadmintester', '我是管理員2', 'meleesadmin', '$2b$10$8/LutYco1U8p5uKOvpGxYe4WHDeRy4kl1oyapWjvUqWlD26TBbUr2', '男', '1991-09-02', '0988789789', 'meleestest@gmail.com', '桃園市中壢區中央路300號', '/1d4f5cf0-70ec-4c20-83e8-34e6cf3fa0e1.jpg', '2021-09-13', 1),
(38, 'meleesadmintester2', 'mmeleesadmin', 'meleesadmin2', '$2b$10$PNtUkVRAbcfB0s9EgFEpK.xjSv8nb9ywz0FY3jn8KbiJ8aPnfijua', '女', '1991-02-01', '0988456654', 'meleestest@gmail.com', '桃園市中壢區中央路300號', '/f5bffdd5-2885-4437-84b7-72c2106565b2.jpg', '2021-09-13', 1);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
