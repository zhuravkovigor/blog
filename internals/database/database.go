package database

import (
	"blog/internals/models"
	"database/sql"
	"fmt"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

var DB *sql.DB

// InitDB инициализирует соединение с базой данных SQLite
func InitDB(dataSourceName string) error {
	var err error
	DB, err = sql.Open("sqlite3", dataSourceName)
	if err != nil {
		return fmt.Errorf("failed to open database: %w", err)
	}

	if err = DB.Ping(); err != nil {
		return fmt.Errorf("failed to ping database: %w", err)
	}

	log.Println("✅ Database connected successfully")
	return nil
}

// CreateTables создает необходимые таблицы в базе данных
func CreateTables() error {
	query := `
	CREATE TABLE IF NOT EXISTS posts (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		title TEXT NOT NULL,
		content TEXT NOT NULL,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
	);`

	_, err := DB.Exec(query)
	if err != nil {
		return fmt.Errorf("failed to create tables: %w", err)
	}

	log.Println("✅ Tables created successfully")
	return nil
}

// GetAllPosts возвращает все посты из базы данных
func GetAllPosts() ([]models.Post, error) {
	query := "SELECT id, title, content, created_at, updated_at FROM posts ORDER BY created_at DESC"

	rows, err := DB.Query(query)
	if err != nil {
		return nil, fmt.Errorf("failed to query posts: %w", err)
	}
	defer rows.Close()

	var posts []models.Post

	for rows.Next() {
		var post models.Post
		err := rows.Scan(&post.ID, &post.Title, &post.Content, &post.CreatedAt, &post.UpdatedAt)
		if err != nil {
			return nil, fmt.Errorf("failed to scan post: %w", err)
		}
		posts = append(posts, post)
	}

	return posts, nil
}

// CreatePost создает новый пост в базе данных
func CreatePost(title, content string) error {
	query := "INSERT INTO posts (title, content) VALUES (?, ?)"

	_, err := DB.Exec(query, title, content)
	if err != nil {
		return fmt.Errorf("failed to create post: %w", err)
	}

	return nil
}

// CloseDB закрывает соединение с базой данных
func CloseDB() error {
	if DB != nil {
		return DB.Close()
	}
	return nil
}
