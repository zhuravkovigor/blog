SERVER_DIR = ./cmd/server

run:
	go run $(SERVER_DIR)/main.go

watch-go:
	air

watch-templ:
	templ generate --watch

build-css:
	./scripts/build-css.sh production

watch-css:
	@echo "👀 Starting CSS watch mode..."
	@echo "styles.css" > ./static/css/current-css-file.txt
	@npx @tailwindcss/cli -i ./src/style.css -o ./static/css/styles.css --watch

dev:
	@echo "👀 Watching Go, Templ and CSS files..."
	@echo "🔧 Setting up development environment..."
	@echo "styles.css" > ./static/css/current-css-file.txt
	@bash -c ' \
		{ \
			make watch-templ & \
			make watch-css & \
			make watch-go & \
			wait; \
		}'

dev-simple:
	@echo "🚀 Starting development server with CSS watch..."
	@echo "styles.css" > ./static/css/current-css-file.txt
	@bash -c ' \
		{ \
			npx @tailwindcss/cli -i ./src/style.css -o ./static/css/styles.css --watch & \
			templ generate --watch & \
			air & \
			wait; \
		}'

build:
	@echo "🔨 Building project..."
	@make build-css
	@templ generate
	@go build -o ./tmp/main $(SERVER_DIR)/main.go
	@echo "✅ Build complete!"


preview:
	@echo "🔍 Previewing the project..."
	./tmp/main

# Database commands
seed:
	@echo "🌱 Seeding database with fake data..."
	@go run ./cmd/seed/main.go

seed-clear:
	@echo "🌱 Clearing database and seeding with fresh data..."
	@go run ./cmd/seed/main.go -clear

seed-custom:
	@echo "🌱 Seeding database with custom amount of posts..."
	@echo "Usage: make seed-custom COUNT=50"
	@go run ./cmd/seed/main.go -count=$(or $(COUNT),20)

db-clear:
	@echo "🧹 Clearing all data from database..."
	@go run ./cmd/seed/main.go -clear -count=0