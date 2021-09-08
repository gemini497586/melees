-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-09-08 04:57:20
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
-- 資料表結構 `private_ingred`
--

CREATE TABLE `private_ingred` (
  `id` int(10) UNSIGNED NOT NULL,
  `private_id` int(10) NOT NULL,
  `ingred` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ingred_unit` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `private_ingred`
--

INSERT INTO `private_ingred` (`id`, `private_id`, `ingred`, `ingred_unit`) VALUES
(1, 3, '高麗菜', '1顆'),
(2, 3, '蛋', '1顆'),
(3, 3, '洋蔥', '1顆'),
(7, 5, '牛肉', '500g'),
(8, 5, '蔥', '少許'),
(9, 3, '紅辣椒', '少許'),
(10, 3, '胡椒鹽', '1/4匙'),
(11, 1, '番茄醬', '100ml'),
(12, 1, '太白粉', '50ml');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `private_ingred`
--
ALTER TABLE `private_ingred`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_ingred`
--
ALTER TABLE `private_ingred`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
