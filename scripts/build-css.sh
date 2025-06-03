#!/bin/bash

# Скрипт для сборки CSS с хешированием файлов

# Проверяем режим (dev или production)
MODE=${1:-production}

if [ "$MODE" = "dev" ]; then
    echo "🔧 Building CSS for development..."
    # В режиме разработки создаем простой файл без хеша
    npx @tailwindcss/cli -i ./src/style.css -o ./static/css/styles.css --watch &
    echo "styles.css" > ./static/css/current-css-file.txt
    echo "✅ CSS watch started. File: styles.css"
else
    echo "🔨 Building CSS for production..."
    # Очищаем старые файлы
    rm -f static/css/styles.*.css
    
    # Собираем CSS
    npx @tailwindcss/cli -i ./src/style.css -o ./static/css/styles.css --minify
    
    # Проверяем, что файл создался
    if [ ! -f "./static/css/styles.css" ]; then
        echo "❌ Error: CSS file was not created"
        exit 1
    fi
    
    # Генерируем хеш на основе содержимого файла
    HASH=$(sha256sum "./static/css/styles.css" | cut -d' ' -f1 | cut -c1-8)
    
    # Переименовываем файл с хешем
    mv "./static/css/styles.css" "./static/css/styles.${HASH}.css"
    
    # Сохраняем имя файла для использования в Go
    echo "styles.${HASH}.css" > "./static/css/current-css-file.txt"
    
    echo "✅ CSS file built: styles.${HASH}.css"
fi
