-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-09-18 14:42:32
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
(54, 120, 5, '超好吃', 3, '2021-09-18'),
(55, 120, 5, '我想吃烤肉', 3, '2021-09-18');

-- --------------------------------------------------------

--
-- 資料表結構 `private_follow`
--

CREATE TABLE `private_follow` (
  `id` int(10) UNSIGNED NOT NULL,
  `private_id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(180, 119, '小排骨', ' 500g'),
(181, 119, '薑', ' 4片'),
(182, 119, '蔥', ' 2根'),
(183, 119, '南瓜', ' 1/4塊'),
(184, 120, '去皮雞胸肉', ' 300g'),
(185, 120, '地瓜粉(粗粒)', ' 60g'),
(186, 120, '九層塔', ' 1小碗');

-- --------------------------------------------------------

--
-- 資料表結構 `private_like`
--

CREATE TABLE `private_like` (
  `id` int(10) UNSIGNED NOT NULL,
  `private_id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `private_like`
--

INSERT INTO `private_like` (`id`, `private_id`, `user_id`) VALUES
(36, 120, 5);

-- --------------------------------------------------------

--
-- 資料表結構 `private_recipe`
--

CREATE TABLE `private_recipe` (
  `id` int(10) UNSIGNED NOT NULL,
  `picture` varchar(500) DEFAULT NULL,
  `name` varchar(500) DEFAULT NULL,
  `intro` varchar(1000) DEFAULT NULL,
  `qty` varchar(10) DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `member_id` int(10) DEFAULT NULL,
  `valid` int(5) NOT NULL,
  `star_rate` double UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `private_recipe`
--

INSERT INTO `private_recipe` (`id`, `picture`, `name`, `intro`, `qty`, `create_date`, `member_id`, `valid`, `star_rate`) VALUES
(119, '015d879e-d10e-48b4-98ad-07818d33fc18.jpg', '南瓜蒸小排', '軟糯香甜的南瓜，與小排骨ㄧ起蒸，滑嫩入味、清爽好吃也好下飯。', '4', '2021-09-18', 5, 1, 0),
(120, '3b43f07f-1754-4419-9e3b-600c394b3b3a.jpg', '鹽酥雞', '今天來分享大人小孩都喜歡的鹽酥雞，外酥肉多汁的鹽酥雞絕對完勝你家巷口的鹽酥雞攤。\n自己動手做的最安心，只要掌握一點小技巧，你也可以快速上手，有興趣的朋友就趁著假日來試試看吧!', '2', '2021-09-18', 5, 1, 3);

-- --------------------------------------------------------

--
-- 資料表結構 `private_save`
--

CREATE TABLE `private_save` (
  `id` int(10) UNSIGNED NOT NULL,
  `private_id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `private_save`
--

INSERT INTO `private_save` (`id`, `private_id`, `user_id`) VALUES
(21, 120, 5);

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
(109, 119, '南瓜去皮切厚片；蒜拍扁去皮切末；辣椒切小圈；薑切片；排骨用流動水沖洗一下後瀝乾；蔥用可飲用水洗淨後擦乾切蔥花；'),
(110, 119, '排骨裡加入所有的醃料；'),
(111, 119, '抓勻按摩一下讓醃料吸收；'),
(112, 119, '南瓜片用少許鹽與薑片抓一下後，鋪在盤子裡；'),
(113, 119, '醃好的排骨擺在南瓜上，在放上辣椒圈；'),
(114, 120, '將步驟2的雞肉塊依序加入醃料中的糖、五香粉、白胡椒粉、醬油膏、鮮奶及蒜泥抓勻(由乾料依序到溼料，肉才能完全吸收調味料)，然後用保鮮膜封住，醃漬時間至少30分鐘。(氣溫高時建議放入冰箱冷藏)'),
(115, 120, '將所有材料備齊。'),
(116, 120, '雞胸肉先用叉子兩面均勻戳洞，再切成約適口大小(約3cm)的塊狀。'),
(117, 120, '將九層塔洗淨後，以廚房紙巾拭乾備用。(以免油炸時產生油爆)');

-- --------------------------------------------------------

--
-- 資料表結構 `private_tags`
--

CREATE TABLE `private_tags` (
  `id` int(5) UNSIGNED NOT NULL,
  `private_id` int(5) NOT NULL,
  `tags` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `private_view`
--

CREATE TABLE `private_view` (
  `id` int(10) UNSIGNED NOT NULL,
  `private_id` int(5) NOT NULL,
  `user_id` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `private_view`
--

INSERT INTO `private_view` (`id`, `private_id`, `user_id`) VALUES
(189, 119, 5),
(190, 119, 5),
(191, 119, 5),
(192, 119, 5),
(193, 119, 5),
(194, 119, 5),
(195, 119, 5),
(196, 119, 5),
(197, 119, 5),
(198, 119, 5),
(199, 119, 5),
(200, 119, 5),
(201, 119, 5),
(202, 119, 5),
(203, 119, 5),
(204, 119, 5),
(205, 119, 5),
(206, 119, 5),
(207, 119, 5),
(208, 119, 5),
(209, 119, 5),
(210, 119, 5),
(211, 119, 5),
(212, 119, 5),
(213, 119, 5),
(214, 119, 5),
(215, 119, 5),
(216, 119, 5),
(217, 119, 5),
(218, 120, 5),
(219, 120, 5),
(220, 120, 5),
(221, 120, 5),
(222, 120, 5),
(223, 120, 5),
(224, 120, 5),
(225, 120, 5);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `private_comment`
--
ALTER TABLE `private_comment`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `private_follow`
--
ALTER TABLE `private_follow`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `private_ingred`
--
ALTER TABLE `private_ingred`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `private_like`
--
ALTER TABLE `private_like`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `private_recipe`
--
ALTER TABLE `private_recipe`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `private_save`
--
ALTER TABLE `private_save`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `private_step`
--
ALTER TABLE `private_step`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `private_tags`
--
ALTER TABLE `private_tags`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `private_view`
--
ALTER TABLE `private_view`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_comment`
--
ALTER TABLE `private_comment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_follow`
--
ALTER TABLE `private_follow`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_ingred`
--
ALTER TABLE `private_ingred`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=187;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_like`
--
ALTER TABLE `private_like`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_recipe`
--
ALTER TABLE `private_recipe`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_save`
--
ALTER TABLE `private_save`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_step`
--
ALTER TABLE `private_step`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_tags`
--
ALTER TABLE `private_tags`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_view`
--
ALTER TABLE `private_view`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=226;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
