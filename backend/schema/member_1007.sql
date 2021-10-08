-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2021 年 10 月 07 日 10:20
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
-- 資料表結構 `codes`
--

CREATE TABLE `codes` (
  `id` int(5) UNSIGNED NOT NULL,
  `member_id` int(5) UNSIGNED NOT NULL,
  `token` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `codes`
--

INSERT INTO `codes` (`id`, `member_id`, `token`, `create_time`) VALUES
(1, 1, 'a889cadd-d5cf-45f1-8ebc-c5aaecc9f5fc', '2021-10-03T12:30:11'),
(2, 1, 'cf7cbc8e-3da8-44f3-93f2-69e0dcd2ac96', '2021-10-07T12:27:58'),
(3, 1, '68b4121e-7b85-43aa-9951-8133a534ed83', '2021-10-07T12:30:04'),
(4, 1, '03d8241b-af73-4937-95a3-651e142bea51', '2021-10-07T13:32:29');

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
  `gender` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'U',
  `birthday` date NOT NULL DEFAULT '2000-01-01',
  `phone` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `picture` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `google_id` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `facebook_id` bigint(64) UNSIGNED DEFAULT 0,
  `valid` int(3) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`id`, `name`, `nickname`, `account`, `password`, `gender`, `birthday`, `phone`, `email`, `address`, `picture`, `create_date`, `google_id`, `facebook_id`, `valid`) VALUES
(1, '陳怡君', 'Mia', 'meleesadminx1', '$2b$10$ujPAtMteEItFzmlQ4FrDLuAu4/41lhJmOvMljXzr7mESfeUYUJyqW', '女', '1992-08-01', '0988456654', 'melees05051015@gmail.com', '桃園市中壢區中央路300號', '/2f623546-eff6-4e52-8e9b-cf5678136754.jpg', '2021-09-27', '0', 0, 1),
(2, '子晴', 'Amelia', 'meleesadminx2', '$2b$10$Ui1OeB6BEdJjEqRI7ucKm.JoZ4X/NEK7.vJ4CprN9QP4rxAU.dY66', '女', '1988-06-17', '0988456654', 'melees05051015@gmail.com', '桃園市中壢區中央路300號', '/3413349c-5e52-4ed1-8e8e-de85b81690ba.jpg', '2021-09-27', '0', 0, 1),
(3, '思妤', 'Olive', 'meleesadminx3', '$2b$10$HIIGp3UZrI7oXLjaZbNIMulplyAU1iK1q3k2Rj1DiTU2X1n84GNpu', '女', '1990-09-04', '0988456654', 'melees05051015@gmail.com', '桃園市中壢區中央路300號', '/9b19bd54-2bab-46d3-8ab0-936e4346b64d.jpg', '2021-09-27', '0', 0, 1),
(4, '雅婷', 'Kristen', 'meleesadminx4', '$2b$10$lHQn6kmpUXKQwN3nffmU3O5jPYvdha5qmVE1ZNP9MnRKCr9Md0UKS', '女', '1990-09-04', '0988456654', 'melees05051015@gmail.com', '桃園市中壢區中央路300號', '/754c6476-0221-4257-9e9f-a857a62a48c7.jpg', '2021-09-27', '0', 0, 1),
(5, '黃欣怡', 'Jennifer', 'meleesadminx5', '$2b$10$OafVDsdm4QEa.mj0TUQyMe7MWLZ5FVZFuNxJPwmhKdcjOogT7Iooa', '女', '1997-09-27', '0988456654', 'melees05051015@gmail.com', '桃園市中壢區中央路300號', '/7f5224b8-bc7e-49d0-a88b-e1f4768b60ec.jpg', '2021-09-27', '0', 0, 1),
(6, 'ss melees', NULL, 'googlemelees05051015@gmail.com', 'googlelogin', 'U', '2000-01-01', NULL, 'melees05051015@gmail.com', NULL, 'https://lh3.googleusercontent.com/a/AATXAJwWvrO9hN4AeAyfqCPw1Pbu-rJy-EaFLzgzdhNf=s96-c', '2021-10-07', '114308149775074934225', 0, 1),
(7, '巫建成', NULL, 'googlegemini497586@gmail.com', 'googlelogin', 'U', '2000-01-01', NULL, 'gemini497586@gmail.com', NULL, 'https://lh3.googleusercontent.com/a-/AOh14GjMrS2LpL_Evua_-5zBWFFQbRhR9v41Xlak1r_Jfg=s96-c', '2021-10-04', '104178412132613890853', 0, 1),
(8, '巫建成', NULL, 'facebookgemini497586@gmail.com', 'facebooklogin', 'U', '2000-01-01', NULL, 'gemini497586@gmail.com', NULL, 'https://graph.facebook.com/v2.6/4500042843351621/picture?type=large', '2021-10-04', '0', 4500042843351621, 1),
(9, '巫建成', NULL, 'googlegemini49140512@smail.nchu.edu.tw', 'googlelogin', 'U', '2000-01-01', NULL, 'gemini49140512@smail.nchu.edu.tw', NULL, 'https://lh3.googleusercontent.com/a/AATXAJwqaqdN_tm7XRqqHuX4DfdXSpbE4KelvwozA9QC=s96-c', '2021-10-05', '105575059760692888814', 0, 1),
(10, '陳弘', NULL, 'facebookdial012@yahoo.com.tw', 'facebooklogin', 'U', '2000-01-01', NULL, 'dial012@yahoo.com.tw', NULL, 'https://graph.facebook.com/v2.6/5095485540467276/picture?type=large', '2021-10-05', '0', 5095485540467276, 1),
(11, 'RUBY', NULL, 'googledial0122@gmail.com', 'googlelogin', 'U', '2000-01-01', NULL, 'dial0122@gmail.com', NULL, 'https://lh3.googleusercontent.com/a-/AOh14GgNpPA1t-0qN0Q8AVjVqxT0z4JIcxQFEYgU_4i7FQ=s96-c', '2021-10-05', '115773880522516546115', 0, 1),
(12, '李冠霖', NULL, 'googlesdy2615380450@gmail.com', 'googlelogin', 'U', '2000-01-01', NULL, 'sdy2615380450@gmail.com', NULL, 'https://lh3.googleusercontent.com/a-/AOh14GjbsUci_r0HVMwaubyE8HvNGRv6hsBBQqMZqdyPSUs=s96-c', '2021-10-05', '107485719122593727505', 0, 1),
(13, 'CHEN木白', NULL, 'googlescsa8860512@gmail.com', 'googlelogin', 'U', '2000-01-01', NULL, 'scsa8860512@gmail.com', NULL, 'https://lh3.googleusercontent.com/a-/AOh14GgbtqTXSh8bI-fzqpWFzWfCMjEZ8evoHKN69SFk_MU=s96-c', '2021-10-05', '114113226735909152477', 0, 1),
(14, 'Ryan Jan', NULL, 'facebookshin8512@hotmail.com', 'facebooklogin', 'U', '2000-01-01', NULL, 'shin8512@hotmail.com', NULL, 'https://graph.facebook.com/v2.6/4349363908452055/picture?type=large', '2021-10-05', '0', 4349363908452055, 1),
(15, 'Ryan Jan', NULL, 'googleryanjan8512@gmail.com', 'googlelogin', 'U', '2000-01-01', NULL, 'ryanjan8512@gmail.com', NULL, 'https://lh3.googleusercontent.com/a/AATXAJzt1Js3mJuAL7YDKXXLBsRVd4MT36fdg1mjwZyd=s96-c', '2021-10-05', '102951600095484780219', 0, 1);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `codes`
--
ALTER TABLE `codes`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `codes`
--
ALTER TABLE `codes`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
