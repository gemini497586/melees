-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2021 年 09 月 08 日 08:33
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
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
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
(1, 'meleesCI', 'meleesCI', 'meleesadmin', '123456', '男', '2021-09-06', '0962456456', 'meleesadmin@gmail.com', '桃園市中壢區中央路300號', 'default_userPic.png', '2021-09-06', 1),
(2, 'Tony', 'Tony', 'tony', '66664523', '男', '1990-05-07', '0922355555', 'tony@testmail.com', '桃園市中壢區中大路301號', 'default_userPic.png', '2021-07-07', 1),
(3, 'May', 'May', 'may', '123456', '女', '1998-12-01', '0924933222', 'may@testmail.com', '桃園市中壢區中大路302號', 'default_userPic.png', '2021-07-07', 1),
(4, 'Amelia', 'Amelia', 'amelia', '654231', '女', '1991-02-15', '0922803222', 'amelia@testmail.com', '桃園市中壢區中大路303號', 'default_userPic.png', '2021-07-07', 1),
(8, 'Jason', NULL, 'Jason4564564', '456789', '男', '1987-09-06', '0912345678', 'Jason@testmail.com', NULL, 'default_userPic.png', '2021-07-10', 1),
(9, 'Mina', 'minananan', 'mina456d', '789456', '女', '1999-09-09', '0909090312', 'mina@testmail.com', NULL, 'default_userPic.png', '2021-07-10', 1),
(10, 'Jcnana', 'Jcnana', 'jcnana0303', '030303', '女', '1990-01-13', '0909099333', 'JcnanaJcnana@testmail.com', NULL, 'default_userPic.png', '2021-07-11', 1),
(11, 'Nober', '', 'Nober77', '789789', '男', '1987-09-06', '', 'nober@gmail.com', NULL, 'default_userPic.png', '2021-07-11', 1),
(12, 'Tom', '', 'tom123', '456703', '男', '1999-09-09', '', 'tom@testmail.com', NULL, 'default_userPic.png', '2021-07-12', 1),
(13, 'tom', '', 'tom123', '030303', '男', '1999-09-09', '', 'tom@testmail.com', NULL, 'default_userPic.png', '2021-07-12', 1),
(14, 'KC', 'kcnana', 'kc456ddd', 'sdf456', '女', '1990-01-13', '0909645312', 'kcnana@testmail.com', NULL, 'default_userPic.png', '2021-07-12', 1),
(16, 'Modal', 'dfdfgfff', 'Modalhahahah', 'hahahhaha', '男', '1989-11-13', '0912345987', 'Modal@gmail.com', NULL, 'default_userPic.png', '2021-07-12', 1),
(17, 'Modalcassss', 'dfdfgfff', 'Modalhahahah', 'hahahhaha', '男', '1989-11-13', '0912345987', 'Modal@gmail.com', NULL, 'default_userPic.png', '2021-07-12', 1),
(18, 'testttt', 'ddddd', 'tesr022', '456456', '女', '1987-07-06', '0909090312', 'amy@testmail.com', NULL, 'default_userPic.png', '2021-07-12', 1),
(19, 'testt456789', 'ddddd', 'tesr022', '456456', '女', '1987-07-06', '0909090312', 'amy@testmail.com', NULL, 'default_userPic.png', '2021-07-12', 1),
(20, 'wu0wu0wu0', '', 'sdgdddssd', '456456', '男', '1994-04-13', '', 'sadfdsf@testmail.com', NULL, 'default_userPic.png', '2021-07-12', 1),
(21, 'wu00nika', '', 'sdgdddssd', '456456', '男', '1994-04-13', '', 'sadfdsf@testmail.com', NULL, 'default_userPic.png', '2021-07-12', 1),
(22, 'uououou', '', 'gfdhdfgh', 'ferrrreer', '男', '1990-01-13', '', 'snosnow@testmail.com', NULL, 'default_userPic.png', '2021-07-12', 1),
(23, 'kaouou', '', 'gfdhdfgh', 'ferrrreer', '男', '1990-01-13', '', 'snosnow@testmail.com', NULL, 'default_userPic.png', '2021-07-12', 1),
(24, 'grrrrrr', '', 'sadfddddd', 'sawwwqwe', '女', '1990-01-13', '0999521555', 'amoooy@testmail.com', NULL, 'default_userPic.png', '2021-07-12', 1),
(25, 'finally', 'finally', 'finally', '456456', '男', '1987-07-06', '', 'finally@testmail.com', NULL, 'default_userPic.png', '2021-07-12', 1),
(26, '000', 'JasonJason', 'tom123', '456456', '男', '1999-09-09', '0909090312', 'finally@testmail.com', NULL, 'default_userPic.png', '2021-07-14', 1),
(27, 'tomaddess', 'ber77', 'tom123', '456456', '男', '1999-09-09', '0909099333', 'finally@testmail.com', NULL, 'default_userPic.png', '2021-07-14', 1),
(28, 'tom', 'ber77', 'enzo789', '456456', '女', '1987-09-06', '0909099333', 'amy@testmail.com', '新北市萬里區', 'default_userPic.png', '2021-07-14', 1),
(29, 'Amy', 'kcnana', 'amy456789', '789789', '女', '1987-09-06', '0909645312', 'amy@testmail.com', '桃園市中壢區', 'default_userPic.png', '2021-07-14', 1),
(30, 'Webex', '456465', 'webex456456', '456465456', '男', '1990-01-13', '0909090312', 'tomwebex@testmail.com', '桃園市中壢區中央路330號', 'default_userPic.png', '2021-07-16', 1),
(31, 'Mike', '', 'mike', '456456', '男', '1999-09-09', '0909090312', 'tom@testmail.com', '桃園市中壢區中央路300號', 'default_userPic.png', '2021-07-16', 1),
(32, 'Amyliiy', '', 'Amyliiy334', '123456', '女', '2000-06-12', '0912365487', 'Amyliiy@testmail.com', '桃園市中壢區中央路334號', '180628-7760-0-jYh8n.jpeg', '2021-07-17', 1),
(33, 'Tommychu', '', 'Tommychu', '789789', '男', '1988-02-09', '', 'tommychu@testmail.com', '', 'default_userPic.png', '2021-07-17', 1),
(34, 'tomaler', '', 'tomaler', '456456', '男', '2010-08-13', '', 'tomaler@testmail.com', '', 'default_userPic.png', '2021-07-17', 1),
(35, 'tom123', '', 'amy45678945', '456456', '男', '1993-05-12', '', 'tony123@testmail.com', '桃園市中壢區中央路390號', '20160907224612-89819158.jpeg', '2021-07-17', 1);

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
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
