-- ============================================
-- 在线购物系统 MySQL 数据库初始化脚本
-- 适用于 Go 后端连接
-- ============================================

-- 创建数据库（如果不存在）
CREATE DATABASE IF NOT EXISTS `online_shopping` 
DEFAULT CHARACTER SET utf8mb4 
DEFAULT COLLATE utf8mb4_unicode_ci;

-- 使用数据库
USE `online_shopping`;

-- ============================================
-- 1. 用户表 (users)
-- ============================================
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `role` INT NOT NULL COMMENT '0代表商家，1代表顾客',
  `userId` BIGINT NOT NULL COMMENT '用户ID',
  `userName` VARCHAR(255) NOT NULL COMMENT '用户名',
  `password` VARCHAR(255) NOT NULL COMMENT '密码',
  `address` VARCHAR(255) NOT NULL COMMENT '发货/收货地址',
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_userId` (`userId`),
  UNIQUE KEY `idx_userName` (`userName`),
  KEY `idx_role` (`role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户表';

-- ============================================
-- 2. 商品表 (goods)
-- ============================================
CREATE TABLE IF NOT EXISTS `goods` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` INT NOT NULL COMMENT '商品类别：1生活用品、2电子产品、3食品',
  `goodId` VARCHAR(255) NOT NULL COMMENT '商品ID',
  `merchantId` BIGINT NOT NULL COMMENT '商家ID',
  `isSelling` TINYINT(1) NOT NULL DEFAULT 1 COMMENT '是否售卖中：0否，1是',
  `quantity` INT NOT NULL DEFAULT 0 COMMENT '库存数量',
  `volume` INT NOT NULL DEFAULT 0 COMMENT '成交量',
  `price` DECIMAL(10,2) NOT NULL COMMENT '商品价格',
  `goodName` VARCHAR(255) NOT NULL COMMENT '商品名称',
  `goodIntro` VARCHAR(255) NOT NULL COMMENT '商品介绍',
  `goodPics` JSON NOT NULL COMMENT '商品图片URL数组',
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_goodId` (`goodId`),
  KEY `idx_merchantId` (`merchantId`),
  KEY `idx_type` (`type`),
  KEY `idx_isSelling` (`isSelling`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='商品表';

-- ============================================
-- 3. 购物车表 (cart)
-- ============================================
CREATE TABLE IF NOT EXISTS `cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `customerId` BIGINT NOT NULL COMMENT '顾客ID',
  `sumPrice` DECIMAL(10,2) NOT NULL DEFAULT 0.00 COMMENT '购物车总价',
  `goodStatus` JSON NOT NULL COMMENT '商品状态信息（JSON数组）',
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_customerId` (`customerId`),
  KEY `idx_createdAt` (`createdAt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='购物车表';

-- ============================================
-- 4. 订单表 (orders)
-- ============================================
CREATE TABLE IF NOT EXISTS `orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `customerId` BIGINT NOT NULL COMMENT '顾客ID',
  `sumPrice` DECIMAL(10,2) NOT NULL COMMENT '订单总价',
  `goodStatus` JSON NOT NULL COMMENT '商品状态信息（JSON数组）',
  `payTime` DATETIME NOT NULL COMMENT '支付时间',
  `sumState` VARCHAR(255) NOT NULL COMMENT '订单完成状态：0均未完成、1部分完成、2全部完成',
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_customerId` (`customerId`),
  KEY `idx_payTime` (`payTime`),
  KEY `idx_sumState` (`sumState`),
  KEY `idx_createdAt` (`createdAt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='订单表';

-- ============================================
-- 脚本执行完成
-- ============================================
-- 使用说明：
-- 1. 执行此脚本创建数据库和表结构
-- 2. Go 后端连接字符串示例：
--    user:password@tcp(localhost:3306)/online_shopping?charset=utf8mb4&parseTime=True&loc=Local
-- 3. 确保 MySQL 版本 >= 5.7（支持 JSON 数据类型）
-- ============================================

