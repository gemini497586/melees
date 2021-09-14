-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-09-14 04:04:41
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
(26, 1, 2, '雖然第49條對女性夜間工作開了一個通道，雖然第49條對女性夜間工作開了一個通道，雖然第49條對女性夜間工作開了一個通道，雖然第49條對女性夜間工作開了一個通道，雖然第49條對女性夜間工作開了一個通道，雖然第49條對女性夜間工作開了一個通道，雖然第49條對女性夜間工作開了一個通道，雖然第49條對女性夜間工作開了一個通道，', 4, '2021-08-17'),
(27, 1, 4, '如事業單位無工會者，經勞資會議同意後，且符合下列各款規定者，不在此限', 3, '2021-09-07'),
(28, 6, 7, '總統賴清德從行政院長任內開始就力推雙語國家的政策，', 3, '2021-09-16'),
(29, 3, 7, '賴清德一席全英語且不看稿的致詞演講', 4, '2021-08-30'),
(30, 6, 6, '賴清德使用全英文演講其實早在台南市長任內也有過，當時喜好棒球的賴清德，在市長任內爭取到了「U12世界少棒賽」的主辦權，', 5, '2021-08-09'),
(31, 2, 4, '分別是2015、2017年的比賽，當時他就有用全英文演講，展現企圖心，為求精確還先與精通外文核心幕僚先對稿。', 2, '2021-08-30'),
(32, 1, 123, '據知情高層透露，後來該諮詢會議總共舉辦4場，蔡英文參與第1場，後來幾場會議', 1, '2021-08-30'),
(33, 28, 123, '都是由賴清德親自赴國發會主持，當時找了不同專家學者一起來研擬未來的政策方向，會議中也有不少重要的討論，對於雙語國家政策有深度研究。', 4, '2021-08-30'),
(34, 27, 6, '比ruby做得還難吃', 3, '2021-08-11'),
(35, 1, 3, '由於中國對台灣現狀以及印太地區的和平與穩定構成嚴重威脅，建議歐盟在「一個中國」政策下，仍應採取實際行動，', 2, '2021-08-30'),
(36, 1, 3, '多方面和密切合作，建議歐盟駐台的歐洲經濟貿易辦事處', 3, '2021-08-30'),
(37, 1, 3, '這是一個不斷擴大的民主聯合陣線，支持共同面對一個越來越武斷的中國的最新表現。', 4, '2021-08-20'),
(38, 6, 6, '比我老婆煮得還難吃= =', 3, '2021-08-09'),
(39, 7, 4, '呼籲歐盟執委會儘早與台灣啟談「雙邊投資協定」（BIA），他另強調中國須停止對台灣的軍事威脅。', 4, '2021-08-13');

-- --------------------------------------------------------

--
-- 資料表結構 `private_follow`
--

CREATE TABLE `private_follow` (
  `private_id` int(5) UNSIGNED NOT NULL,
  `member_id` int(5) UNSIGNED NOT NULL
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
(1, 3, '高麗菜', '1顆'),
(2, 3, '蛋', '1顆'),
(3, 3, '洋蔥', '1顆'),
(7, 5, '牛肉', '500g'),
(8, 5, '蔥', '少許'),
(9, 3, '紅辣椒', '少許'),
(10, 3, '胡椒鹽', '1/4匙'),
(11, 1, '番茄醬', '100ml'),
(12, 1, '太白粉', '50ml'),
(13, 1, '蝦子', '15隻'),
(14, 1, '透抽', '1隻'),
(15, 1, '辣椒', '1根'),
(16, 1, '九層塔', '6-8片'),
(17, 1, '寬冬粉', '2捲'),
(18, 2, '大蝦仁', '8隻'),
(19, 2, '糖', '1大匙'),
(20, 2, '檸檬汁', '50g'),
(21, 2, '蒜末', '15g'),
(22, 2, '青蔥', '1根'),
(23, 4, '鱸魚片', '2片'),
(24, 4, '蒜末', '2瓣'),
(25, 4, '辣椒', '1根'),
(26, 4, '開水', '20ml'),
(27, 4, '檸檬汁', '20g'),
(28, 5, '雞胸肉', '300g'),
(29, 5, '鴻禧菇', '1包'),
(30, 5, '香茅', '1枝'),
(31, 0, '豬肉', '500g'),
(32, 0, '豬肉', '500g'),
(33, 0, 'asd', 'dda'),
(34, 0, 'asd', 'dda'),
(35, 0, 'asd', 'dda'),
(36, 0, '去骨雞腿肉', '2片'),
(37, 0, '蛋', '3顆'),
(38, 0, '蛋', '3顆'),
(39, 0, '蛋', '3顆'),
(40, 47, '蛋', '3顆'),
(41, 48, '牛番茄', '2顆'),
(42, 49, '', ''),
(43, 0, '飯', ''),
(44, 0, '可樂', ''),
(45, 0, '飯', ''),
(46, 0, '可樂', ''),
(47, 0, '牛排', '4盎司'),
(48, 0, '奶油', '50g');

-- --------------------------------------------------------

--
-- 資料表結構 `private_like`
--

CREATE TABLE `private_like` (
  `private_id` int(5) UNSIGNED NOT NULL,
  `member_id` int(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `private_like`
--

INSERT INTO `private_like` (`private_id`, `member_id`) VALUES
(5, 4),
(3, 2),
(1, 5),
(3, 2),
(6, 4),
(8, 1),
(9, 3),
(11, 9);

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
  `view_qty` varchar(1000) DEFAULT NULL,
  `like_qty` varchar(1000) DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `member_id` int(10) DEFAULT NULL,
  `valid` int(5) NOT NULL,
  `star_rate` double UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `private_recipe`
--

INSERT INTO `private_recipe` (`id`, `picture`, `name`, `intro`, `qty`, `view_qty`, `like_qty`, `create_date`, `member_id`, `valid`, `star_rate`) VALUES
(1, '1.jpg', '泰式涼拌海鮮寬粉', '其實本來是兩道不同的料理，但因為這顆南瓜實在是太沒有香氣了，怎麼吃怎麼平淡、怎麼吃怎麼無味，於是最後決定把沒有味道的南瓜煮和甜美帶酸的番茄紅醬擺在一起。', '2', '545', '425', '2021-07-05', 1, 0, 3.5),
(2, '2.jpg', '檸檬蝦', '這次做的檸檬蝦是沒有殼的版本，因為Joey吃飯不太喜歡剝殼、啃骨頭，所以通常我們很少做排骨料理，海鮮也都一定會剝殼。', '2', '359', '470', '2021-07-06', 5, 0, 5),
(3, '3.jpg', '蜂蜜檸檬豬排', '今天要分享的主菜非常簡單，而且味道很好，大人小朋友都會喜歡哦！如果可以提前一天準備會更加入味，準備便當的時候也可以更從容。', '2', '754', '560', '2021-07-04', 10, 0, 2.7),
(4, '4.jpg', '檸檬魚', '今天的主菜是好多人的點菜，檸檬魚其實很簡單哦！自己在家準備起來很快，材料也很好取得哦！', '2', '653', '800', '2021-07-06', 12, 0, 4),
(5, '5.jpg', '香茅椰汁雞湯', '今天跟大家分享一道泰式雞湯，是我小時候到泰式料理餐廳最期待的湯品 — 香茅椰汁雞湯， 如果沒有喝過的人，非常推薦可以試試看，很特別好喝哦！我調整了材料和作法，刪去了一些我會過敏的食物，這個版本是在家可以自己做的家常版本哦！', '1', '7', '1', '2021-07-13', 1, 0, 2),
(50, NULL, '青江菜', '', '', NULL, NULL, '2021-09-14', NULL, 0, 0),
(51, NULL, '披薩', '美味披薩', '', NULL, NULL, '2021-09-14', NULL, 0, 0),
(52, NULL, '披薩', '美味披薩', '', NULL, NULL, '2021-09-14', NULL, 0, 0),
(53, NULL, '披薩', '美味披薩', '', NULL, NULL, '2021-09-14', 3, 0, 0),
(54, NULL, '披薩', '美味披薩', '', NULL, NULL, '2021-09-14', 3, 0, 0),
(55, NULL, '披薩', '美味披薩', '', NULL, NULL, '2021-09-14', 3, 0, 0),
(56, NULL, '披薩', '美味披薩', '', NULL, NULL, '2021-09-14', 3, 0, 0),
(57, NULL, '巨無霸牛排', '比臉還大', '5', NULL, NULL, '2021-09-14', 3, 0, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `private_save`
--

CREATE TABLE `private_save` (
  `private_id` int(5) UNSIGNED NOT NULL,
  `member_id` int(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(10, 5, '就這樣就可以拍美美照嚕,哈哈'),
(11, 1, '混合所有醬汁材料備用。'),
(12, 1, '蔬菜的部分先行處理，番茄切丁，小黃瓜切片，洋蔥切絲後浸泡冰水，玉米筍切片。'),
(13, 1, '蝦子開背，洗淨擦乾。'),
(14, 1, '透抽按照影片的方式處理，先從頭拉出墨囊和內臟，接著捏著從鰭的部分環狀剝除外層的膜。切開身體取出軟骨，用水把黏液沖乾淨，從身體內部畫刀，切成適當大小。頭的部分去除眼睛和龍珠後切小塊即可。'),
(15, 1, '取一鍋滾水，放入處理好的透抽汆燙15秒，取出泡冰水，接著放入蝦子燙熟後取出同樣浸入冰水中，降溫後瀝乾。'),
(16, 2, '蒜頭切末、青蔥切花。'),
(17, 2, ' 蝦子去殼開背除腸泥，洗淨擦乾備用，加入一點太白粉抓勻。'),
(18, 2, '檸檬汁、糖、白胡椒調勻成醬汁。'),
(19, 2, '蒜頭放入鍋中爆香。 '),
(20, 2, '放入蝦子煎至雙面轉紅。 '),
(21, 3, '梅花肉排用刀背拍鬆斷筋。'),
(22, 3, '拍鬆的肉排加入一大匙蜂蜜、一大匙檸檬汁、一大匙醬油、兩大匙米酒、蒜泥抓醃均勻，靜置一小時(能夠隔夜的話更好)。 '),
(23, 3, '開中小火將鍋子燒熱，豬肉排連同醬汁一起放入鍋中，加鍋蓋悶5分鐘左右。 '),
(24, 3, '開蓋翻面，以澆淋的方式不斷將醬汁淋在未接觸鍋子的那一面。 '),
(25, 3, '翻面重複動作，直到醬汁收到濃稠狀。'),
(26, 4, '魚上放上蔥段和薑片及香茅。 '),
(27, 4, '放入鍋中蒸約10分鐘左右至熟。'),
(28, 4, '檸檬汁、魚露、蒜末、辣椒、糖、開水混合均勻。'),
(29, 4, '魚蒸熟後取出，淋上醬汁。'),
(30, 4, '最後放上香菜或九層塔即可。');

-- --------------------------------------------------------

--
-- 資料表結構 `private_tags`
--

CREATE TABLE `private_tags` (
  `id` int(5) UNSIGNED NOT NULL,
  `private_id` int(5) NOT NULL,
  `tags` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `private_tags`
--

INSERT INTO `private_tags` (`id`, `private_id`, `tags`) VALUES
(1, 4, '雞肉'),
(2, 4, '咖哩'),
(3, 4, '平民'),
(4, 8, '牛肉');

-- --------------------------------------------------------

--
-- 資料表結構 `private_view`
--

CREATE TABLE `private_view` (
  `private_id` int(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `private_view`
--

INSERT INTO `private_view` (`private_id`) VALUES
(5),
(3),
(6),
(8),
(4),
(13),
(6),
(9),
(16),
(2),
(2),
(1),
(1),
(3),
(2),
(3),
(3),
(4),
(50),
(51),
(52),
(51),
(52),
(50),
(2),
(51),
(2),
(2),
(2),
(2),
(2),
(2),
(2),
(2),
(2),
(2),
(2),
(2);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `private_comment`
--
ALTER TABLE `private_comment`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `private_ingred`
--
ALTER TABLE `private_ingred`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `private_recipe`
--
ALTER TABLE `private_recipe`
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
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_comment`
--
ALTER TABLE `private_comment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_ingred`
--
ALTER TABLE `private_ingred`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_recipe`
--
ALTER TABLE `private_recipe`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_step`
--
ALTER TABLE `private_step`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_tags`
--
ALTER TABLE `private_tags`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
