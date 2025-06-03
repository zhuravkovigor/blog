package database

import (
	"log"
	"math/rand"

	"github.com/go-faker/faker/v4"
)

// SeedData заполняет базу данных фейковыми данными
func SeedData(count int) error {
	log.Printf("🌱 Seeding database with %d fake posts...", count)

	for i := 0; i < count; i++ {
		title := faker.Sentence()
		content := generateFakeContent()

		err := CreatePost(title, content)
		if err != nil {
			return err
		}
	}

	log.Printf("✅ Successfully seeded %d posts", count)
	return nil
}

// generateFakeContent генерирует фейковый контент для поста
func generateFakeContent() string {
	paragraphs := rand.Intn(5) + 2 // от 2 до 6 параграфов
	content := ""

	for i := 0; i < paragraphs; i++ {
		if i > 0 {
			content += "\n\n"
		}

		sentences := rand.Intn(4) + 3 // от 3 до 6 предложений в параграфе
		for j := 0; j < sentences; j++ {
			if j > 0 {
				content += " "
			}
			content += faker.Sentence()
		}
	}

	return content
}

// ClearData очищает все данные из таблицы posts
func ClearData() error {
	log.Println("🧹 Clearing all posts from database...")

	_, err := DB.Exec("DELETE FROM posts")
	if err != nil {
		return err
	}

	// Сброс автоинкремента
	_, err = DB.Exec("DELETE FROM sqlite_sequence WHERE name='posts'")
	if err != nil {
		return err
	}

	log.Println("✅ Database cleared successfully")
	return nil
}
