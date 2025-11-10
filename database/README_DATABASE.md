## 环境要求

- **MySQL 版本**: >= 5.7（需要支持 JSON 数据类型）
- **Go 版本**: >= 1.16
- **MySQL 驱动**: `github.com/go-sql-driver/mysql`

---

## 执行 SQL 脚本

```bash
# 使用 root 用户执行脚本
mysql -u root -p < init.sql

# 或者指定数据库用户
mysql -u your_username -p < init.sql
```


## 插入初始数据

执行完 `init.sql` 创建数据库和表结构后，可以使用 `seed.sql` 插入测试数据。

### 执行数据插入脚本

```bash
# 使用命令行执行（推荐）
mysql -u root -p < seed.sql

# 或者指定数据库用户
mysql -u your_username -p < seed.sql
```

### 数据内容说明

`seed.sql` 脚本包含以下测试数据：

#### 1. 用户数据 (7 个用户)
- **商家** (role=0): 3 个
  - seller (userId: 12345678900)
  - merchant1 (userId: 1001)
  - merchant2 (userId: 1002)
  - merchant3 (userId: 1003)
- **顾客** (role=1): 4 个
  - bm (userId: 12345678999)
  - customer1 (userId: 2001)
  - customer2 (userId: 2002)

**默认密码**: 所有用户密码均为 `123456`

#### 2. 商品数据 (15 个商品)
- **生活用品** (type=1): 5 个
  - 不锈钢保温杯 (G001)
  - 纯棉毛巾 (G004)
  - 塑料收纳盒 (G007)
  - 玻璃杯 (G010)
  - 陶瓷餐具 (G013)
- **电子产品** (type=2): 5 个
  - 智能手机 (G002)
  - 蓝牙耳机 (G005)
  - 笔记本电脑 (G008)
  - 智能手表 (G011)
  - 平板电脑 (G014)
- **食品** (type=3): 5 个
  - 精品咖啡豆 (G003)
  - 手工巧克力 (G006)
  - 有机燕麦 (G009)
  - 新鲜面包 (G012)
  - 纯天然蜂蜜 (G015)

#### 3. 购物车数据 (3 个购物车)
- 顾客 12345678999 的购物车（1 件商品）
- 顾客 2001 的购物车（3 件商品）
- 顾客 2002 的购物车（3 件商品）

#### 4. 订单数据 (4 个订单)
- 订单1：部分完成状态
- 订单2：全部完成状态
- 订单3：均未完成状态
- 订单4：全部完成状态

### 验证数据插入

执行完 `seed.sql` 后，可以运行以下 SQL 验证数据：

```sql
-- 查看用户数量
SELECT COUNT(*) AS user_count FROM users;

-- 查看商品数量
SELECT COUNT(*) AS goods_count FROM goods;

-- 查看购物车数量
SELECT COUNT(*) AS cart_count FROM cart;

-- 查看订单数量
SELECT COUNT(*) AS order_count FROM orders;

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
FROM goods
GROUP BY type;
```

### 清空数据（可选）

如果需要重新插入数据，可以取消注释 `seed.sql` 文件开头的清空语句：

```sql
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE `orders`;
TRUNCATE TABLE `cart`;
TRUNCATE TABLE `goods`;
TRUNCATE TABLE `users`;
SET FOREIGN_KEY_CHECKS = 1;
```


---

## Go 后端连接配置

### 1. 安装 MySQL 驱动

```bash
go get -u github.com/go-sql-driver/mysql
```

### 使用环境变量配置（推荐）

创建 `.env` 文件：
```env
DB_USER=root
DB_PASSWORD=password123
DB_HOST=localhost
DB_PORT=3306
DB_NAME=online_shopping
```

