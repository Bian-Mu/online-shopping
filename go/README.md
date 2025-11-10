# Go 后端数据库连接

## 快速开始

### 1. 安装依赖

```bash
# 安装 godotenv 包（用于读取 .env 文件）
go get github.com/joho/godotenv
```

### 2. 创建 .env 文件（推荐）

```bash
# 在 go 目录下创建 .env 文件
cat > .env << EOF
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
DB_PORT=3306
DB_NAME=online_shopping
EOF

# 或者使用编辑器
nano .env
```

**.env 文件示例**:
```env
DB_USER=root
DB_PASSWORD=your_password_here
DB_HOST=localhost
DB_PORT=3306
DB_NAME=online_shopping
```

### 3. 运行程序

```bash
# 直接运行，程序会自动读取 .env 文件
go run .
```

**注意**: 
- 如果 `.env` 文件不存在，程序会使用环境变量或默认值
- `.env` 文件优先级高于环境变量
- 建议将 `.env` 添加到 `.gitignore`，不要提交到版本控制

## 环境变量说明

| 变量名 | 说明 | 默认值 | 必填 |
|--------|------|--------|------|
| `DB_USER` | 数据库用户名 | `root` | 否 |
| `DB_PASSWORD` | 数据库密码 | 空 | **是** |
| `DB_HOST` | 数据库主机 | `localhost` | 否 |
| `DB_PORT` | 数据库端口 | `3306` | 否 |
| `DB_NAME` | 数据库名称 | `online_shopping` | 否 |

## 常见问题

### 1. 认证失败 (Access denied)

**错误信息**:
```
Error 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)
```

**解决方法**:
```bash
# 设置正确的密码
export DB_PASSWORD=your_actual_password

# 或者如果 root 用户没有密码
export DB_PASSWORD=""
```

### 2. 数据库不存在

**错误信息**:
```
Error 1049 (42000): Unknown database 'online_shopping'
```

**解决方法**:
```bash
# 先执行数据库初始化脚本
cd ../database
mysql -u root -p < init.sql

# 或者创建数据库
mysql -u root -p -e "CREATE DATABASE online_shopping;"
```

### 3. 连接被拒绝

**错误信息**:
```
dial tcp 127.0.0.1:3306: connect: connection refused
```

**解决方法**:
```bash
# 检查 MySQL 服务状态
sudo systemctl status mysql

# 启动 MySQL 服务
sudo systemctl start mysql
```

## 测试连接

运行程序后，如果连接成功，会显示：

```
✅ 数据库连接成功！
📊 数据库: online_shopping
🔗 主机: localhost:3306
👤 用户: root
```

## 使用示例

### 方法一：使用 .env 文件（推荐）

```bash
# 1. 创建 .env 文件
cat > .env << EOF
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=3306
DB_NAME=online_shopping
EOF

# 2. 运行程序
go run .
```

### 方法二：使用环境变量

```bash
# 临时设置（仅当前命令）
DB_PASSWORD=your_password go run .

# 或设置环境变量（当前会话）
export DB_PASSWORD=your_password
go run .
```

### 方法三：混合使用

程序会按以下优先级读取配置：
1. `.env` 文件（最高优先级）
2. 系统环境变量
3. 默认值（最低优先级）

## 下一步

1. ✅ 设置环境变量
2. ✅ 测试数据库连接
3. ✅ 实现业务逻辑（用户管理、商品管理、订单处理等）
4. ✅ 添加 API 接口

