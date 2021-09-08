-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-09-08 04:57:08
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
-- 資料表結構 `private_comment`
--

CREATE TABLE `private_comment` (
  `id` int(10) UNSIGNED NOT NULL,
  `private_id` int(10) DEFAULT NULL,
  `member_id` int(10) DEFAULT NULL,
  `comment` varchar(1000) DEFAULT NULL,
  `star_rate` int(10) UNSIGNED NOT NULL,
  `comment_time` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `private_comment`
--

INSERT INTO `private_comment` (`id`, `private_id`, `member_id`, `comment`, `star_rate`, `comment_time`) VALUES
(26, 1, 2, '真好吃~', 4, '2021-08-30'),
(27, 1, 4, '嗨~好吃', 3, '2021-08-30'),
(28, 6, 7, 'fhdfhnfdh', 3, '2021-08-30'),
(29, 3, 7, '這是一手煎蛋的小情歌', 4, '2021-08-30'),
(30, 6, 6, '真難吃', 5, '2021-08-30'),
(31, 2, 4, '真的不錯，下次再來吃~', 2, '2021-08-30'),
(32, 1, 123, '123', 1, '2021-08-30'),
(33, 28, 123, '433', 4, '2021-08-30'),
(34, 27, 6, '比ruby做得還難吃', 3, '2021-08-30'),
(35, 1, 3, '好吃', 2, '2021-08-30'),
(36, 1, 3, '真低難吃', 3, '2021-08-30'),
(37, 1, 3, '真難吃', 4, '2021-08-30'),
(38, 6, 6, '比我老婆煮得還難吃= =', 3, '2021-08-30'),
(39, 7, 4, '~~~', 4, '2021-08-30');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `private_comment`
--
ALTER TABLE `private_comment`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_comment`
--
ALTER TABLE `private_comment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
