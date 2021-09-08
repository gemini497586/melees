-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-09-08 04:57:31
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
(1, '1.jpg', '泰式涼拌海鮮寬粉', '今天來一份清涼的涼拌海鮮寬粉，炎熱的中午吃特別開胃阿！不愛海鮮的Joey也津津有味。', '2', '545', '425', '2021-07-05', 1, 0, 3.5),
(2, '2.jpg', '檸檬蝦', '這次做的檸檬蝦是沒有殼的版本，因為Joey吃飯不太喜歡剝殼、啃骨頭，所以通常我們很少做排骨料理，海鮮也都一定會剝殼。', '2', '359', '470', '2021-07-06', 5, 0, 3.7),
(3, '3.jpg', '蜂蜜檸檬豬排', '今天要分享的主菜非常簡單，而且味道很好，大人小朋友都會喜歡哦！如果可以提前一天準備會更加入味，準備便當的時候也可以更從容。', '2', '754', '560', '2021-07-04', 10, 0, 4),
(4, '4.jpg', '檸檬魚', '今天的主菜是好多人的點菜，檸檬魚其實很簡單哦！自己在家準備起來很快，材料也很好取得哦！', '2', '653', '800', '2021-07-06', 12, 0, 4),
(5, '5.jpg', '香茅椰汁雞湯', '今天跟大家分享一道泰式雞湯，是我小時候到泰式料理餐廳最期待的湯品 — 香茅椰汁雞湯， 如果沒有喝過的人，非常推薦可以試試看，很特別好喝哦！我調整了材料和作法，刪去了一些我會過敏的食物，這個版本是在家可以自己做的家常版本哦！', '1', '7', '1', '2021-07-13', 1, 0, 3),
(6, '6.jpg', '三杯豆干配醋溜馬鈴薯', '今天有兩個食譜，一是三杯豆干，另一是Joey奶奶教我們做的醋溜馬鈴薯。醋溜馬鈴薯的食譜是男友之前出國讀書前，奶奶特別教他的，擔心他在國外沒辦法吃到熟悉的味道，連我這個不愛吃馬鈴薯的人都吃津津有味，真的很開胃下飯，當下酒菜也很適合耶。', '2', '16', '13', '2021-07-13', 5, 0, 0),
(7, '7.jpg', '乾炒牛河', '今天午餐是我很愛的乾炒牛河，滑嫩的牛肉搭配Q軟的粄條，加上鹹甜的醬汁，真的是人間簡單樸實的美味啊！你們往後看鍋子裡的牛肉，看起來就很嫩吧', '2', '17', '14', '2021-07-13', 6, 0, 0),
(8, '8.jpg', '番茄燒豆腐', '今天的便當本來是番茄燒豆包的，不過去了附近的兩間超市都沒有看到生豆包，索性就來做燒豆腐吧，特意將豆腐切小塊些，煎得恰恰，再炒搭配番茄醬燒的醬汁，拌著白飯吃真的好下飯呀！', '2', '6', '2', '2021-07-13', 5, 0, 0),
(9, '9.jpg', '蒜蓉醬油燒蝦', '今天分享的這道料理其實算是我們很常自己在家煮的家常晚餐配菜，因為Joey喜歡醬汁拌飯，所以這種有湯汁又下飯的料理時常出現在我們家的餐桌上。作為拌飯用，我喜歡用比較小的蝦，好入口也容易入味。', '2', '24', '14', '2021-07-13', 2, 0, 0),
(10, '10.jpg', '墨西哥辣椒漢堡排', '自從某次在露易莎吃到墨西哥辣椒豬肉米堡之後就一直對這個味道念念不忘，上回想做一直買不到墨西哥辣椒，這次終於可以來做啦！我覺得自己做漢堡排，味道和口感都更好了！建議一定要加起司片，吃起來更對味哦！', '2', '36', '17', '2021-07-13', 1, 0, 0),
(11, '10.jpg', '墨西哥辣椒漢堡排', '自從某次在露易莎吃到墨西哥辣椒豬肉米堡之後就一直對這個味道念念不忘，上回想做一直買不到墨西哥辣椒，這次終於可以來做啦！我覺得自己做漢堡排，味道和口感都更好了！建議一定要加起司片，吃起來更對味哦！', '2', '6', '5', '2021-07-14', 1, 0, 0),
(12, NULL, 'sd', 'fsdf', 'sdf', '0', '0', '2021-07-14', 1, 0, 0),
(13, NULL, 'sdf', 'sdf', 'sdf', '0', '0', '2021-07-14', 1, 0, 0),
(14, 'Maple0002.jpg', 'sdf', 'sdf', 'dsf', '0', '0', '2021-07-14', 1, 0, 0),
(15, '3425_14.jpg', 'fsd', 'hgsh', 'sh', '0', '0', '2021-07-14', 1, 0, 0),
(16, '138974.jpg', 'sdgsd', 'gsdhg', 'dg', '1', '0', '2021-07-14', 1, 0, 0),
(17, '22736_8.jpg', '咖哩飯', '西班牙烘蛋 Tortilla 是西班牙家常料理，好吃的秘訣必須要外酥內軟，要如何讓表皮蛋香、裏頭濕潤？會不藏私的教給大家喔 ', '1份', '2', '0', '2021-07-14', 1, 0, 0),
(18, '141965.jpg', '檸檬蒔蘿奶油', '居家防疫，你的廚藝有更上一層樓嗎？疫情宅在家，許多人開始了自煮生活，各式各樣的常備醬料成為廚房新寵兒～', '1份', '1', '0', '2021-07-14', 1, 0, 0),
(19, 'slide1.jpg', 'asd', 'sadasd', 'asd', '3', '0', '2021-07-14', 1, 1, 0),
(20, 'phones.png', 'dgfhfgh', 'dfgfdgdf', 'dfgfdg', '1', '0', '2021-07-14', 1, 1, 0),
(21, '', 'sdfsdfds', 'sdfffffffffffffffffffffffffffffffffffffffffff', '', '1', '0', '2021-07-14', 1, 1, 0),
(22, '22736_8.jpg', 'sdfsd', 'fsdf', 'sd', '1', '0', '2021-07-14', 1, 1, 0),
(23, '141965.jpg', 'sdf', 'sdf', 'sdf', '0', '0', '2021-07-15', 1, 1, 0),
(24, '', 'dfds', 'fsd', 'dsfsdf', '0', '0', '2021-07-15', 1, 1, 0),
(25, 'long-hair.jpg', '頭髮', 'hihihi', '1份', '1', '0', '2021-07-15', 1, 1, 0);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `private_recipe`
--
ALTER TABLE `private_recipe`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `private_recipe`
--
ALTER TABLE `private_recipe`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
