package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
)

// getDSN 从环境变量获取数据库连接字符串，如果环境变量不存在则使用默认值
func getDSN() string {
	// 从环境变量获取配置，如果没有则使用默认值
	user := getEnv("DB_USER", "root")
	password := getEnv("DB_PASSWORD", "")
	host := getEnv("DB_HOST", "localhost")
	port := getEnv("DB_PORT", "3306")
	dbName := getEnv("DB_NAME", "online_shopping")

	// 如果密码为空，提示用户设置
	if password == "" {
		log.Println("警告: DB_PASSWORD 未设置，使用空密码")
		log.Println("提示: 请在 .env 文件中设置 DB_PASSWORD=your_password")
		log.Println("提示: 或使用环境变量: export DB_PASSWORD=your_password")
	}

	return fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		user, password, host, port, dbName)
}

// getEnv 获取环境变量，如果不存在则返回默认值
func getEnv(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}

func main() {
	// 加载 .env 文件（如果存在）
	if err := godotenv.Load(); err != nil {
		log.Println("提示: .env 文件不存在，将使用环境变量或默认值")
		log.Println("提示: 创建 .env 文件可以更方便地管理配置")
	}

	// 获取数据库连接字符串
	dsn := getDSN()

	// 打开数据库连接
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("数据库连接失败:", err)
	}
	defer db.Close()

	// 测试连接
	err = db.Ping()
	if err != nil {
		log.Println("❌ 数据库连接测试失败:", err)
		log.Println("\n常见问题排查:")
		log.Println("1. 检查 MySQL 服务是否启动: sudo systemctl status mysql")
		log.Println("2. 检查用户名和密码是否正确")
		log.Println("3. 检查数据库是否存在: mysql -u root -p -e 'SHOW DATABASES;'")
		log.Println("4. 在 .env 文件中设置 DB_PASSWORD=your_password")
		log.Println("   或使用环境变量: export DB_PASSWORD=your_password")
		log.Fatal("请修复上述问题后重试")
	}

	fmt.Println("✅ 数据库连接成功！")

	// 显示连接信息（隐藏密码）
	fmt.Printf("📊 数据库: %s\n", getEnv("DB_NAME", "online_shopping"))
	fmt.Printf("🔗 主机: %s:%s\n", getEnv("DB_HOST", "localhost"), getEnv("DB_PORT", "3306"))
	fmt.Printf("👤 用户: %s\n", getEnv("DB_USER", "root"))
}
