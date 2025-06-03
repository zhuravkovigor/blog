package utils

import (
	"os"
	"path/filepath"
	"strings"
)

// GetCurrentCSSFile возвращает имя текущего CSS файла с хешем
func GetCurrentCSSFile() string {
	// Пытаемся прочитать имя файла из файла
	currentDir, _ := os.Getwd()
	filePath := filepath.Join(currentDir, "static", "css", "current-css-file.txt")

	content, err := os.ReadFile(filePath)
	
	if err != nil {
		// Если файл не найден, проверяем наличие styles.css
		stylesPath := filepath.Join(currentDir, "static", "css", "styles.css")
		if _, err := os.Stat(stylesPath); err == nil {
			return "styles.css"
		}
		// Иначе возвращаем дефолтное имя
		return "styles.css"
	}

	fileName := strings.TrimSpace(string(content))

	if fileName == "" {
		return "styles.css"
	}

	return fileName
}
