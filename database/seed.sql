-- ============================================
-- 在线购物系统 MySQL 数据库初始数据脚本
-- 用于插入测试数据
-- ============================================

-- 使用数据库
USE `online_shopping`;

-- ============================================
-- 1. 清空现有数据（可选，谨慎使用）
-- ============================================
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE `orders`;
TRUNCATE TABLE `cart`;
TRUNCATE TABLE `goods`;
TRUNCATE TABLE `users`;
SET FOREIGN_KEY_CHECKS = 1;

-- ============================================
-- 2. 插入用户数据 (users)
-- ============================================
INSERT INTO `users` (`role`, `userId`, `userName`, `password`, `address`) VALUES
(0, 12345678900, 'seller', '123456', '上海市浦东新区张江高科技园区'),
(1, 12345678999, 'bm', '123456', '上海市浦东新区张江高科技园区'),
(0, 1001, 'merchant1', '123456', '北京市朝阳区中关村大街'),
(0, 1002, 'merchant2', '123456', '广州市天河区珠江新城'),
(0, 1003, 'merchant3', '123456', '深圳市南山区科技园'),
(1, 2001, 'customer1', '123456', '上海市黄浦区南京东路'),
(1, 2002, 'customer2', '123456', '杭州市西湖区文三路');

-- ============================================
-- 3. 插入商品数据 (goods)
-- ============================================
INSERT INTO `goods` (`type`, `goodId`, `merchantId`, `isSelling`, `quantity`, `volume`, `price`, `goodName`, `goodIntro`, `goodPics`) VALUES
-- 生活用品 (type=1)
(1, 'G001', 1001, 1, 50, 0, 89.90, '车厘子树苗', '正宗车厘子树苗大樱桃树苗果树果苗嫁接矮化盆栽水果树南方北种植', '["http://t5hz6jh5i.hd-bkt.clouddn.com/O1CN013e0j4X1JyvywarAXo_%21%212220488811098.jpg", "http://t5hz6jh5i.hd-bkt.clouddn.com/O1CN013e0j4X1JyvywarAXo_%21%212220488811098.jpg"]'),
(3, 'G004', 1001, 0, 0, 0, 25.00, '麦富迪猫条', '麦富迪猫条100支20支亲嘴鱼羊奶湿粮包猫零食猫咪补水主食猫罐头', '["http://t5hz6jh5i.hd-bkt.clouddn.com/O1CN017fu1Gu21eB7KKIuxz_%21%214611686018427384449-0-item_pic.jpg", "http://t5hz6jh5i.hd-bkt.clouddn.com/O1CN017fu1Gu21eB7KKIuxz_%21%214611686018427384449-0-item_pic.jpg"]'),
(1, 'G007', 1001, 1, 60, 0, 35.00, '洁柔纸巾', '洁柔纸巾可湿水抽纸3层无香餐巾面巾纸卫生纸整箱家用实惠装厕纸', '["http://t5hz6jh5i.hd-bkt.clouddn.com/O1CN01CktGgb1XF2uAvAOB4_%21%211723512893.jpg"]'),
(1, 'G010', 1001, 0, 0, 0, 18.00, '西芹秧苗', '寿光皇后西芹秧苗正宗根芹苗红芹白芹种子苗穴盘育苗带土发货四季', '["http://t5hz6jh5i.hd-bkt.clouddn.com/O1CN01GIyRcf1CvXjeCsq3n_%21%21400420143.jpg", "http://t5hz6jh5i.hd-bkt.clouddn.com/O1CN01GIyRcf1CvXjeCsq3n_%21%21400420143.jpg"]'),
(3, 'G013', 1001, 1, 20, 0, 128.00, '大桂圆干', '正宗莆田特级大桂圆干福建特产闽南妈祖伴手礼品龙眼干旅游送礼', '["http://t5hz6jh5i.hd-bkt.clouddn.com/O1CN01J0GHC31isr7MYCk4n_%21%214611686018427384197-0-item_pic.jpg", "http://t5hz6jh5i.hd-bkt.clouddn.com/O1CN01J0GHC31isr7MYCk4n_%21%214611686018427384197-0-item_pic.jpg"]'),

-- 电子产品 (type=2)
(3, 'G002', 1002, 1, 25, 0, 2999.00, '黄豆酱', '海天金字黄豆酱450g袋装豆瓣酱炒菜拌饭拌面酱大葱蘸酱家用酱料', '["http://t5hz6jh5i.hd-bkt.clouddn.com/O1CN01UGQoOO2DdVwO9LZFM_%21%214611686018427381992-0-item_pic.jpg", "http://t5hz6jh5i.hd-bkt.clouddn.com/O1CN01UGQoOO2DdVwO9LZFM_%21%214611686018427381992-0-item_pic.jpg"]'),
(2, 'G005', 1002, 1, 30, 0, 399.00, '美图秀秀svip', '美图秀秀svip会员7天1天3天美图秀秀粉钻vip一天电脑手机网页版', '["http://t5hz6jh5i.hd-bkt.clouddn.com/O1CN01nqLHHC1hs6r7sLOl8_%21%212220063214332.jpg"]'),
(2, 'G008', 1002, 1, 15, 0, 4599.00, '抖币充值', '1000钻石抖币充值秒到账抖币冲值音抖充币dy抖音充值dou斗抖', '["http://t5hz6jh5i.hd-bkt.clouddn.com/O1CN01oDdJKx1flZxyk1CL1_%21%214611686018427386751-0-item_pic.jpg"]'),
(2, 'G011', 1002, 1, 40, 0, 899.00, '随车充', '新能源汽车随车充电放电一体枪便携智能二合一通用比亚迪排插放电', '["http://t5hz6jh5i.hd-bkt.clouddn.com/goodsIMG_7605.JPEG"]'),
(1, 'G014', 1002, 1, 18, 0, 1999.00, '眼镜鼻垫', '眼镜鼻垫超软海绵鼻托贴片减压防压痕防脱落防滑鼻梁支架眼睛配件', '["http://t5hz6jh5i.hd-bkt.clouddn.com/goodsO1CN01GYQcIc1eTQfYQOaZj_%21%212217779713872.jpg"]'),

-- 食品 (type=3)
(1, 'G003', 1003, 1, 100, 0, 68.00, '小学数学画图法', '2025年新版小学数学画图法 妙解小学数学应用题带视频讲解 二年级三年级四五六排队问题植树问题计算题思维训练数学母题大全人教版', '["http://t5hz6jh5i.hd-bkt.clouddn.com/goodsO1CN01MPSSmy1jBdMHAuHA7_%21%212220214574510.jpg"]'),
(2, 'G006', 1003, 1, 80, 0, 20.00, '青枫卡', '青枫卡20元卡密自动发货仅限自用 青枫卡充值20元', '["http://t5hz6jh5i.hd-bkt.clouddn.com/goodsO1CN01T7FumB2Dcb8hYujZy_%21%214611686018427380374-2-item_pic.png"]'),
(1, 'G009', 1003, 1, 120, 0, 198.90, '胶原蛋白发光面膜', 'RuiLa Feier胶原蛋白发光面膜提拉紧致补水保湿滋润薄涂', '["http://t5hz6jh5i.hd-bkt.clouddn.com/goodsO1CN01XLfA691pn5QRJuixk_%21%214611686018427387404-2-item_pic.png"]'),
(3, 'G012', 1003, 1, 45, 0, 24.40, '收纳箱', '安琴天山棉麻收纳箱布艺装衣物大容量专用百纳箱可视窗衣柜整理盒', '["http://t5hz6jh5i.hd-bkt.clouddn.com/goodsO1CN01crbOGW1XwYXLQj926_%21%212214591132988.jpg"]'),
(2, 'G015', 1003, 1, 65, 0, 75.00, '华为手写笔mpencil三代', '华为手写笔mpencil三代华为平板matepad11.5s/pro/air原装电容笔', '["http://t5hz6jh5i.hd-bkt.clouddn.com/O1CN016nmUeP1kmYpb1ifI6_%21%212218045944726.jpg"]');

-- ============================================
-- 4. 插入购物车数据 (cart)
-- ============================================
-- 顾客 12345678999 的购物车
INSERT INTO `cart` (`customerId`, `sumPrice`, `goodStatus`) VALUES
(12345678999, 89.90, '[
  {
    "addTime": "2024-01-15 10:30:00",
    "calcPrice": 89.90,
    "goodId": "G001",
    "isValid": true,
    "merchantId": 1001,
    "quantity": 1,
    "state": 0
  }
]'),
-- 顾客 2001 的购物车
(2001, 3498.00, '[
  {
    "addTime": "2024-01-16 14:20:00",
    "calcPrice": 2999.00,
    "goodId": "G002",
    "isValid": true,
    "merchantId": 1002,
    "quantity": 1,
    "state": 0
  },
  {
    "addTime": "2024-01-16 14:25:00",
    "calcPrice": 399.00,
    "goodId": "G005",
    "isValid": true,
    "merchantId": 1002,
    "quantity": 1,
    "state": 0
  },
  {
    "addTime": "2024-01-16 14:30:00",
    "calcPrice": 100.00,
    "goodId": "G003",
    "isValid": true,
    "merchantId": 1003,
    "quantity": 1,
    "state": 0
  }
]'),
-- 顾客 2002 的购物车
(2002, 163.00, '[
  {
    "addTime": "2024-01-17 09:15:00",
    "calcPrice": 68.00,
    "goodId": "G003",
    "isValid": true,
    "merchantId": 1003,
    "quantity": 1,
    "state": 0
  },
  {
    "addTime": "2024-01-17 09:20:00",
    "calcPrice": 45.00,
    "goodId": "G006",
    "isValid": true,
    "merchantId": 1003,
    "quantity": 1,
    "state": 0
  },
  {
    "addTime": "2024-01-17 09:25:00",
    "calcPrice": 50.00,
    "goodId": "G009",
    "isValid": true,
    "merchantId": 1003,
    "quantity": 1,
    "state": 0
  }
]');

-- ============================================
-- 5. 插入订单数据 (orders)
-- ============================================
-- 订单1：部分完成
INSERT INTO `orders` (`customerId`, `sumPrice`, `goodStatus`, `payTime`, `sumState`) VALUES
(12345678999, 157.00, '[
  {
    "addTime": "2024-01-10 08:00:00",
    "calcPrice": 89.90,
    "goodId": "G001",
    "isValid": true,
    "merchantId": 1001,
    "quantity": 1,
    "state": 2
  },
  {
    "addTime": "2024-01-10 08:05:00",
    "calcPrice": 67.10,
    "goodId": "G003",
    "isValid": true,
    "merchantId": 1003,
    "quantity": 1,
    "state": 1
  }
]', '2024-01-10 08:30:00', '1'),

-- 订单2：全部完成
(2001, 4599.00, '[
  {
    "addTime": "2024-01-12 11:00:00",
    "calcPrice": 4599.00,
    "goodId": "G008",
    "isValid": true,
    "merchantId": 1002,
    "quantity": 1,
    "state": 2
  }
]', '2024-01-12 11:15:00', '2'),

-- 订单3：均未完成
(2002, 113.00, '[
  {
    "addTime": "2024-01-14 16:00:00",
    "calcPrice": 68.00,
    "goodId": "G003",
    "isValid": true,
    "merchantId": 1003,
    "quantity": 1,
    "state": 1
  },
  {
    "addTime": "2024-01-14 16:05:00",
    "calcPrice": 45.00,
    "goodId": "G006",
    "isValid": true,
    "merchantId": 1003,
    "quantity": 1,
    "state": 1
  }
]', '2024-01-14 16:20:00', '0'),

-- 订单4：全部完成
(2001, 974.00, '[
  {
    "addTime": "2024-01-13 13:00:00",
    "calcPrice": 899.00,
    "goodId": "G011",
    "isValid": true,
    "merchantId": 1002,
    "quantity": 1,
    "state": 2
  },
  {
    "addTime": "2024-01-13 13:05:00",
    "calcPrice": 75.00,
    "goodId": "G015",
    "isValid": true,
    "merchantId": 1003,
    "quantity": 1,
    "state": 2
  }
]', '2024-01-13 13:30:00', '2');

-- ============================================
-- 6. 验证数据插入
-- ============================================
-- 查看用户数量
SELECT COUNT(*) AS user_count FROM `users`;

-- 查看商品数量
SELECT COUNT(*) AS goods_count FROM `goods`;

-- 查看购物车数量
SELECT COUNT(*) AS cart_count FROM `cart`;

-- 查看订单数量
SELECT COUNT(*) AS order_count FROM `orders`;

-- 查看各类型商品统计
SELECT 
    type,
    CASE type
        WHEN 1 THEN '生活用品'
        WHEN 2 THEN '电子产品'
        WHEN 3 THEN '食品'
    END AS type_name,
    COUNT(*) AS count,
    SUM(quantity) AS total_quantity
FROM `goods`
GROUP BY type;

-- 查看商家商品统计
SELECT 
    u.userName AS merchant_name,
    COUNT(g.id) AS goods_count,
    SUM(g.quantity) AS total_stock
FROM `users` u
LEFT JOIN `goods` g ON u.userId = g.merchantId
WHERE u.role = 0
GROUP BY u.userId, u.userName;

-- ============================================
-- 脚本执行完成
-- ============================================
-- 数据说明：
-- - 用户：7 个（3 个商家，4 个顾客）
-- - 商品：15 个（5 个生活用品，5 个电子产品，5 个食品）
-- - 购物车：3 个
-- - 订单：4 个
-- ============================================

