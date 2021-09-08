-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-09-08 04:57:41
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
-- 資料表結構 `private_step`
--

CREATE TABLE `private_step` (
  `id` int(5) UNSIGNED NOT NULL,
  `private_id` int(5) NOT NULL,
  `steps` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `private_step`
--

INSERT INTO `private_step` (`id`, `private_id`, `steps`) VALUES
(1, 5, '排骨先用清水沖洗過'),
(2, 5, '再加上調味料煮開後，改以小火悶煮25分鐘'),
(3, 5, '最後撒上白芝麻即可'),
(4, 9, '將鍋子加水到7分滿，放入30公克的鹽，少許橄欖油'),
(5, 9, '並加熱至滾水狀態，即可上桌'),
(6, 5, '湯鍋水滾放5克鹽巴跟煎魚冒出來的油(挖一匙到這裡)'),
(7, 5, '煎好魚的鍋子先將魚承出,撒3克鹽到鍋中'),
(8, 5, '放玉米筍/鮮菇/10cc水,蓋鍋小火悶蒸3分鐘'),
(9, 5, '魚洗淨用廚房紙巾擦乾,魚肚面撒鹽'),
(10, 5, '就這樣就可以拍美美照嚕,哈哈');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `private_step`
--
ALTER TABLE `private_step`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_step`
--
ALTER TABLE `private_step`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
