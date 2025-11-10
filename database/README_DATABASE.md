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

