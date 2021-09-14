-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-09-09 08:54:06
-- 伺服器版本： 10.4.20-MariaDB
-- PHP 版本： 7.3.29

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
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `id` int(6) UNSIGNED NOT NULL,
  `category` int(6) NOT NULL COMMENT '產品分類(食材、鍋具、調味料)',
  `image` varchar(10000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '產品名稱',
  `price` int(6) NOT NULL COMMENT '產品價格',
  `specs` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '產品規格',
  `info` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '產品介紹',
  `notice` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '注意事項'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`id`, `category`, `image`, `name`, `price`, `specs`, `info`, `notice`) VALUES
(1, 1, '', '【日荷肉舖】台灣豬豬絞肉', 110, '', '', ''),
(2, 1, '', '【日荷肉舖】美國Choice嫩肩里肌牛排', 95, '重量：100g±5%\n原產地：美國\n保存方式：請置於冷凍-18℃保存', '一頭牛僅能取出少量大約兩公斤的嫩肩里肌，嫩肩里肌的特色是中間有一根透\n明的嫩筋所有牛肉部為裡面獨有的，不同於嚼不動的白筋，\n嫩煎里肌切成火鍋片約0.2公分，在高湯裡清涮一下，即可享有鮮嫩的口感。\n嫩煎里肌帶有細細的油花，相較於里肌又更軟嫩一些。', ''),
(3, 1, '', '【日荷肉舖】美國Choice嫩肩里肌火鍋片', 310, '重量：100g±5%\n原產地：美國\n保存方式：請置於冷凍-18℃保存', '一頭牛僅能取出少量大約兩公斤的嫩肩里肌，嫩肩里肌的特色是中間有一根透\n明的嫩筋所有牛肉部為裡面獨有的，不同於嚼不動的白筋，\n嫩煎里肌切成火鍋片約0.2公分，在高湯裡清涮一下，即可享有鮮嫩的口感。\n嫩煎里肌帶有細細的油花，相較於里肌又更軟嫩一些。', ''),
(4, 1, '', '【日荷肉舖】台灣豬梅花火鍋肉片', 155, '重量：300g±5%\n原產地：台灣\n保存方式：請置於冷凍-18℃保存', '嚴選台灣本土豬肉，梅花肉位於豬隻上肩部份，因為脂肪分佈均勻，橫切開來\n如梅花般形狀而得名，做任何料理均十分適合，吃起來除肉質柔軟細緻外，更\n散發出淡淡豬肉清香。切成薄片，適合煮火鍋，也適合拌炒。', ''),
(5, 1, '', '【日荷肉舖】伊比利Bellota梅花豬火鍋片', 250, '重量：150g±5%\n原產地：西班牙\n保存方式：請置於冷凍-18℃保存', '來自西班牙伊比利豬，是珍貴的豬種。。主食為橡子果、香草及橄欖。使其油\n脂雖豐潤卻不膩口，細緻的肉質中散發出淡淡的榛果香。擁有豬肉界愛瑪仕、\n勞斯萊斯的美名！', ''),
(6, 1, '', '【日荷肉舖】伊比利Bellota厚切梅花豬排', 550, '重量：300g±5%\n原產地：西班牙\n保存方式：請置於冷凍-18℃保存', '自西班牙伊比利豬，是珍貴的豬種。。主食為橡子果、香草及橄欖。\n使其油脂雖豐潤卻不膩口，細緻的肉質中散發出淡淡的榛果香。擁有豬肉界愛瑪仕、勞斯萊斯的美名！', ''),
(7, 1, '', '【日荷肉舖】台灣豬松阪豬（300g)', 220, '重量：300g±5%\n原產地：台灣\n保存方式：請置於冷凍-18℃保存', '', ''),
(8, 1, '', '【日荷肉舖】台灣豬梅花燒烤片', 155, '重量：300g±5%\n原產地：台灣\n保存方式：請置於冷凍-18℃保存', '嚴選台灣本土豬肉，梅花肉位於豬隻上肩部份，因為脂肪分佈均勻，橫切開來\n如梅花般形狀而得名，做任何料理均十分適合，吃起來除肉質柔軟細緻外，更\n散發出淡淡豬肉清香。', ''),
(9, 1, '', '【日荷肉舖】紐西蘭小羔羊薄切片', 190, '重量：300g±5%\n原產地：紐西蘭\n保存方式：請置於冷凍-18℃保存', '在純淨大自然中成長的樂活羊隻，以天然牧草孕育出更豐富的營養成分，精選\n六個月大的小羔羊，部位取自於小羔羊隻的肩背肉塊，限定0.2cm的薄度，更能\n呈現肉質的鮮美嫩度，不論是火鍋、熱炒、烹煮皆適宜。', ''),
(10, 1, '', '大加燕米1kg', 510, '獨家脫殼技術，市售唯一易煮燕麥米\n無添加防腐劑、人工香料及色素', '', ''),
(11, 1, '', '澎湖職人手作花枝蝦排 6片入', 170, '重量：300g±5%/包\n數量：1包 （約6塊入）\n產地：台灣', '', ''),
(12, 1, '', '遠山玫瑰鹽-舒肥雞胸160g', 69, '品牌：康福先生\n品名：舒肥嫩雞胸肉\n內容物/規格：每包重量 160g±10% /包\n產品成份: 雞胸、喜馬拉雅山粉紅鹽、初榨橄欖油\n營養標示：如圖示\n保存期限：冷凍180天\n產地：台灣', '', ''),
(13, 1, '', '脆皮吐司', 70, '持續創作正統天然的歐式麵包及日式麵包，希望傳遞美好的麵包文化。\n每日我們以嚴選食材製作新鮮、安心的麵包，每一個麵包', '', ''),
(14, 1, '', '大武山牧場履歷蛋-白殼(10粒裝)', 300, '品名：大武山牧場履歷蛋-白殼\r\n淨重：L號蛋 /60zg以上/盒\r\n10粒裝', '', ''),
(15, 1, '', '原野放牧蛋(一盒十入)', 140, '', '＊符合歐盟標準的放牧蛋雞場\n＊天然放牧，雞隻健康生長\n＊原野放牧蛋不含抗生素等動物用藥\n＊機能性營養素添加（葉黃素、蝦紅素）', ''),
(16, 1, '', '美蔬菜盒(愛健康)', 270, '品名：美蔬菜盒\n重量：200g\n保存方式：冷藏4- -7度\n保存期限：七天（需冷藏）\n有效日期：標示於包裝袋上\n原產地：台灣', '只要洗手不用洗菜，比飲用水還純淨，下單立即將鑽石級美生菜冷藏宅配送到您手上！\n生菜第一品牌來自NICE GREEn室內智慧農場所出產的高品質安全蔬菜，蔬菜無須經過水洗，打開包裝即可食用。', ''),
(17, 1, '', '白蝦(20尾一包(一台斤))', 370, '蝦子販賣大小，依照當時養殖大小狀況，隨時跟著調整。', '', ''),
(18, 1, '', '真空包台灣國產雞原味清胸肉', 105, '重量：500g\n產地：台灣', '陽太是供應豪X雞排和拉X漢堡肉品的廠商\n工廠通過HACCP國際食品安全認證 除了原味雞胸肉，也有調味雞胸肉和雞腿排 小份量的冷凍包裝，解凍加熱就可以吃很方便', '非供即食，需充分加熱！'),
(19, 1, '', '好菇道鴻喜菇', 220, '100g 每包', '', ''),
(20, 1, '', '中華非基改家常豆腐', 23, '', '', ''),
(21, 2, '', '不鏽鋼真空保鮮盒組', 3680, '．材質／容器部： 不鏽鋼 （SUS304）、真空蓋：壓克力、真空栓\n・填料：矽膠、抽真空氣筒：聚丙烯PP、矽膠\n．尺寸/L: 長24.1×寬15.6×高7.2cm、M：長20.7×寬13.3×高6.4cm、S：長17×寬11.5×高5.5cm\n．重量/L：530g、M：400g、S：270g、抽真空氣筒：40g \n．耐冷溫度/-20度   ', '', ''),
(22, 2, '', '【CookPower 鍋寶】12L數位觸控式健康氣炸烤箱', 3290, '品名：【鍋寶】智能健康氣炸烤箱 12L\n型號：AF-1290W\n額定電壓／額定頻率：110V/60Hz\n總額定消耗電功率：1500W\n材質：機身PP (聚丙烯，耐熱120度)\n接油盤、瀝油不沾烤盤／高級合金+不沾材質(耐熱260度)\n烤網、取叉夾／鐵鍍鉻\n旋轉烤叉／304不鏽鋼\n重量：約7.15kg±5%\n容量：約12L±5%\n商品尺寸：約長34 x寬34.5x高38cm±5%\n數量：乙只入\n附件：瀝油不沾烤盤*1、烤網*2、接油盤*1、旋轉烤叉*1、取叉夾*1、食譜x1、說明書x1', '瀝油不沾烤盤超萬用 烤全魚、易沾食材都不沾\n12L可烤4斤全雞，空間充分運用\n多層烘烤更方便 聚餐、派對都能快速上菜\nTURBO+氣旋對流科技，五機合一料理多變化\n智慧觸控面板，微電腦12種模式全自動烹調\n全配件輕鬆做，滿足中西各式料理\n少油氣炸 告別油煙油膩，減油80%更健康\n五大安全裝置，確保美味烹調又安全', ''),
(23, 2, '', '【CookPower 鍋寶】鈦頂級不沾平底鍋28CM', 890, '', '5層強化材質+鈦合金微粒，抗刮耐磨\n食品級不沾，少油少油煙健康烹調\n高導熱複合金鍋身，傳熱均勻快速\n不挑爐具，瓦斯爐、電磁爐、IH爐、黑晶爐等皆適用', ''),
(24, 2, '', '【德國百靈】BRAUN手持式食物處理機', 6980, '■ 品牌國別：德國\n■ 製造地：歐洲\n■ 電源：110V/ 60Hz\n■ 消耗功率：400W\n■ 轉速(RPM)：13,800\n■ 電源線長度：約120cm\n■ 14大配件：攪拌軸、600ml攪拌杯、打蛋器、磨泥器、350ml切碎盆、小切碎刀、1500ml食物處理器、\n大切碎刀、麵團刀、粗片切片器、細片切片器、粗絲切絲器、細絲切絲器、薯條削切盤\n■ 商品淨重(機身+攪拌軸)：860g\n■ 包裝淨重：3440g\n■ 商品尺寸(機身+攪拌軸)：68 x 68 x 390(mm)\n■ 包裝尺寸：181 x 288 x 509(mm)\n■ 保固：主機保固2年', '歐洲製造、全球銷售第一\n400 W靜音馬達、強勁動能\n家金鐘罩防飛濺設計、防吸鍋好料理\n全球首創 推進式伸縮刀頭，快速打碎堅硬食材\n十項全能：攪碎、混合、切碎、切絲、切片、切條、磨泥、打發、調麵糊、揉麵糰', '#請完全安裝鎖緊馬達手柄與攪拌棒及配件再進行操作，避免內部驅動輪軸損壞\n#請勿在使用攪拌棒時，過度用力重壓食材，導致中心刀軸破裂損壞'),
(25, 2, '', 'thermos 膳魔師厚鑄耐摩不沾鍋_kfb系列單柄平底鍋2', 1530, '尺寸 43.5×25.5×6 (約長x寬x高cm)\n重量 860 (約g)\n鍋身材質 不沾塗層：PTFE\n把手：電木\n鍋身本體：鋁合金 \n導磁底：SUS430不銹鋼\n鍋身外層：烤漆\n定價 NT$1,800元', '', ''),
(26, 3, '', '【原禾軒】雞高湯 (500g/包)', 99, '內容量：500克±5克\n成分：水、精選老母雞\n產地：台灣\n有效期限：標示於包裝\n保存期限：12個月\n保存條件：冷凍於-18°C', '', '1. 非供即食，應充分加熱後再食用。\n2. 本產品內容物不含雞肉塊。\n3. 產品以實物為準，圖片僅供料理參考。\n4. 本產品無添加防腐劑。'),
(27, 3, '', '【原禾軒】經典醇香雞油 (330ml/瓶)', 179, '內容量：330毫升\n成分：雞油、天然海鹽\n產地：台灣\n有效期限：標示於瓶身\n保存期限：12個月（冷藏保存）\n保存條件：建議冷藏保存，開封後請儘速食用完畢', '', '1. 本產品無添加防腐劑，建議冷藏保存，開封後請儘速食用。\n2. 請勿放置在陽光直射或潮濕處，以避免變質。\n3. 本產品為天然動物性油脂，室溫下呈現液態及其自然結晶、沉澱或乳白色分層均屬正常現象。'),
(28, 3, '', '【紐西蘭MILKIO】特級草飼牛無水奶油 (250毫升) ', 529, '內容量： 230公克(250毫升)\n產地：紐西蘭\n保存期限：2年\n製造 / 有效日期：如瓶身所示', '❶來自紐西蘭元裝進口高品質快樂牧場的草飼乳牛\n❷適合高溫烹飪的250℃發煙點，也可直接食用三餐一瓶解決\n❸生酮飲食、防彈咖啡、素食首選，清真食品認證', '1.建議冷藏存放，油品低溫凝固後較易取用，避免溢出\n2.本品來源天然，色澤有深淺不同自然變化，請安心食用\n3.本產品含有牛奶製品'),
(29, 3, '', '【檸檬大叔】純檸檬磚（12顆入/箱）', 320, '內容物：檸檬原汁\n淨重：25公克+-9%/個，12入/盒\n原產地：臺灣屏東九如\n保存方式：置於室內陰涼處，避免陽光直照；檸檬磚封膜如有破損，請勿食用。\n保存期限：1年\n有效日期：標示於包裝', '來自屏東九如的100%純檸檬原汁，獨家滅菌技術，\n便利不沾手的果凍盒包裝，不用擠檸檬，\n輕鬆即飲隨時補充新鮮維他命Ｃ。', ''),
(30, 3, '', '【雀巢】鷹牌煉乳支裝(170g/支)', 65, '內容物名稱：生乳，糖\n內容量：170g\n原產地(國)：西班牙\n保存期限：450日', '成分單純，只使用純鮮乳及糖製成\n除了沾醬，也可作為料理的調味料', '※ 製造日期與有效期限，商品成分與適用注意事項皆標示於包裝或產品中\n※ 本產品網頁因拍攝關係，圖檔略有差異，實際以廠商出貨為主\n※ 本產品文案若有變動敬請參照實際商品為準'),
(31, 3, '', '【聖塔麗塔】產地新鮮初榨橄欖油500ml', 980, '內容物：新鮮無過濾橄欖油500ml\n橄欖品種：100% Coratina\n成分：100%橄欖油\n食品添加物名稱：無\n產地：義大利普利亞 (Puglia)\n有效期限: 2022.12.30', '高溫更安全，煎炒炸拌一瓶搞定\n不經過濾和儲存，營養30%UP\n挑好油就從產地挑起', ''),
(32, 3, '', '【聖塔麗塔】巴薩米克醋Bianco(100ml/白色金標)', 510, '成分：義大利的白葡萄、短期在木桶白橡木熟成。\n100％天然產品無食物色素，無添加增稠劑、無添加焦糖、無添加防腐劑。\n產地：義大利\n內容量：100ml', '100%純天然，不添加防腐劑\n整顆葡萄帶皮熬煮木桶釀造\n加在氣泡水裡，可去油解膩', '擁有歐盟I.G.P產地認證\n100%純天然，不添加防腐劑，焦糖，色素'),
(33, 3, '', '【義大利 PASSERI】頂級黑松露醬(130公克)', 399, '◎商品重量：130g\n◎商品成分：蘑菇、初榨橄欖油、5%夏季黑松露、水、牛肝菌、檸檬汁、鯷魚、洋蔥、糖、酸豆、巴西里、鹽、植物炭、香料。\n◎保存期限：3年\n◎保存方式：開封前置於乾燥陰涼處，開封後請冷藏並盡早食用完畢。\n◎商品產地：義大利', '科學研究數據顯示松露含有豐富的蛋白質、18種氨基酸（包括人體不能合成的8種必需氨基酸）、不飽和脂肪酸、多種維生素、鋅、錳、鐵、鈣、磷、硒等必需微量元素，能提高免疫力，被稱為「餐桌上的鑽石」。', '◎使用後，確保松露醬浸在罐內的橄欖油之下。\n◎取用松露醬的湯匙務必是乾淨、乾燥的狀態。\n◎放回冷藏時，蓋子務必鎖緊，避免水份跑進去\n'),
(34, 3, '', '【義大利 PASSERI】頂級黑松露鹽(100g)', 428, '◎商品重量：100g (內容量)\n◎商品成分：夏季黑松露、鹽、香料。\n◎保存期限：2年\n◎保存方式：存放陰涼處\n◎商品產地：義大利', '松露鹽的製成是由乾燥後的松露，與海鹽、岩鹽等混合而成的調味料。不單是作為料理鹽使用，還可以豐富食物香氣，讓美味升級。', '◎取用松露鹽的湯匙務必是乾淨、乾燥的狀態。\n◎蓋子務必鎖緊，避免水份跑進去\n'),
(35, 3, '', '【Olivado】紐西蘭原裝進口酪梨油1瓶(500毫升)', 528, '全天然, 無膽固醇、無添加劑或防腐劑\r\n發煙點高達攝氏255度\r\n物理性低溫冷壓萃取', '', ''),
(36, 2, '', '路人', 1001, '你好', '123', '789'),
(37, 1, '', '蘋果', 2000, '蘋果', '123', '456');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
