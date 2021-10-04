-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2021 年 10 月 04 日 13:31
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
  `gender` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `phone` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `picture` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT 'default_userPic.png',
  `create_date` date DEFAULT NULL,
  `google_id` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `facebook_id` bigint(64) UNSIGNED DEFAULT 0,
  `valid` int(3) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`id`, `name`, `nickname`, `account`, `password`, `gender`, `birthday`, `phone`, `email`, `address`, `picture`, `create_date`, `google_id`, `facebook_id`, `valid`) VALUES
(1, '陳怡君', 'Mia', 'meleesadminx1', '$2b$10$9yocPmKtOp3duxAuGBU14ur9/yco.0TvZwFY.UKOUFymlc4jvqs26', '女', '1992-08-01', '0988456654', 'meleestest@gmail.com', '桃園市中壢區中央路300號', '/2f623546-eff6-4e52-8e9b-cf5678136754.jpg', '2021-09-27', '0', 0, 1),
(2, 'admintester', 'Amelia', 'meleesadminx2', '$2b$10$Ui1OeB6BEdJjEqRI7ucKm.JoZ4X/NEK7.vJ4CprN9QP4rxAU.dY66', '女', '1988-06-17', '0988456654', 'meleestest@gmail.com', '桃園市中壢區中央路300號', '/3413349c-5e52-4ed1-8e8e-de85b81690ba.jpg', '2021-09-27', '0', 0, 1),
(3, 'admintester', 'Olive', 'meleesadminx3', '$2b$10$HIIGp3UZrI7oXLjaZbNIMulplyAU1iK1q3k2Rj1DiTU2X1n84GNpu', '女', '1990-09-04', '0988456654', 'meleestest@gmail.com', '桃園市中壢區中央路300號', '/9b19bd54-2bab-46d3-8ab0-936e4346b64d.jpg', '2021-09-27', '0', 0, 1),
(4, 'admintester', 'Kristen', 'meleesadminx4', '$2b$10$lHQn6kmpUXKQwN3nffmU3O5jPYvdha5qmVE1ZNP9MnRKCr9Md0UKS', '女', '1990-09-04', '0988456654', 'meleestest@gmail.com', '桃園市中壢區中央路300號', '/754c6476-0221-4257-9e9f-a857a62a48c7.jpg', '2021-09-27', '0', 0, 1),
(5, 'admintester', 'Jennifer', 'meleesadminx5', '$2b$10$OafVDsdm4QEa.mj0TUQyMe7MWLZ5FVZFuNxJPwmhKdcjOogT7Iooa', '女', '1997-09-27', '0988456654', 'meleestest@gmail.com', '桃園市中壢區中央路300號', '/7f5224b8-bc7e-49d0-a88b-e1f4768b60ec.jpg', '2021-09-27', '0', 0, 1),
(7, '巫建成', NULL, 'googlegemini497586@gmail.com', 'googlelogin', NULL, NULL, NULL, 'gemini497586@gmail.com', NULL, 'https://lh3.googleusercontent.com/a-/AOh14GjMrS2LpL_Evua_-5zBWFFQbRhR9v41Xlak1r_Jfg=s96-c', '2021-10-04', '104178412132613890853', 0, 1),
(8, '巫建成', NULL, 'facebookgemini497586@gmail.com', 'facebooklogin', NULL, NULL, NULL, 'gemini497586@gmail.com', NULL, 'https://graph.facebook.com/v2.6/4500042843351621/picture?type=large', '2021-10-04', '0', 4500042843351621, 1);

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
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
