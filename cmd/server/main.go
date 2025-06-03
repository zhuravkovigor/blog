package main

import (
	"blog/internals/database"
	"blog/internals/handlers"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println("⚠️  Warning: .env file not found, using default values")
	}

	// Получаем путь к базе данных из переменных окружения или используем значение по умолчанию
	dbPath := os.Getenv("DB_PATH")
	if dbPath == "" {
		dbPath = "./blog.db"
	}

	err = database.InitDB(dbPath)
	if err != nil {
		log.Fatalf("❌ Failed to initialize database: %v", err)
	}
	defer database.CloseDB()

	err = database.CreateTables()
	if err != nil {
		log.Fatalf("❌ Failed to create tables: %v", err)
	}

	http.HandleFunc("GET /", handlers.GetHome)
	http.HandleFunc("GET /posts", handlers.GetPosts)

	http.Handle("GET /static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // Default port if not set in .env
	}

	fmt.Printf("🚀 Server is running at http://localhost:%s 🎯\n", port)

	err = http.ListenAndServe(":"+port, nil)
	if err != nil {
		fmt.Printf("❗ Failed to start server: %v\n", err)
	}
}
