package main

import (
	"blog/internals/handlers"
	"fmt"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()

	if err != nil {
		panic("❌ Error loading .env file")
	}

	http.HandleFunc("GET /", handlers.GetHome)
	http.HandleFunc("GET /posts", handlers.GetPosts)

	// Обслуживание статических файлов
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
