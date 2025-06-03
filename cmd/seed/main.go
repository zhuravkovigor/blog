package main

import (
	"blog/internals/database"
	"flag"
	"log"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	// Загружаем переменные окружения
	err := godotenv.Load()
	if err != nil {
		log.Println("⚠️  Warning: .env file not found, using default values")
	}

	// Флаги командной строки
	var (
		count = flag.Int("count", 10, "Number of fake posts to generate")
		clear = flag.Bool("clear", false, "Clear all existing data before seeding")
	)
	flag.Parse()

	// Получаем путь к базе данных из переменных окружения или используем значение по умолчанию
	dbPath := os.Getenv("DB_PATH")
	if dbPath == "" {
		dbPath = "./blog.db"
	}

	// Инициализируем базу данных
	err = database.InitDB(dbPath)
	if err != nil {
		log.Fatalf("❌ Failed to initialize database: %v", err)
	}
	defer database.CloseDB()

	// Создаем таблицы если их нет
	err = database.CreateTables()
	if err != nil {
		log.Fatalf("❌ Failed to create tables: %v", err)
	}

	// Очищаем данные если указан флаг
	if *clear {
		err = database.ClearData()
		if err != nil {
			log.Fatalf("❌ Failed to clear data: %v", err)
		}
	}

	// Заполняем базу фейковыми данными
	err = database.SeedData(*count)
	if err != nil {
		log.Fatalf("❌ Failed to seed data: %v", err)
	}

	log.Printf("🎉 Seeding completed! Generated %d posts", *count)

	// Показываем общее количество постов в базе
	posts, err := database.GetAllPosts()
	if err != nil {
		log.Printf("⚠️  Warning: Failed to count posts: %v", err)
	} else {
		log.Printf("📊 Total posts in database: %d", len(posts))
	}
}
