SERVER_DIR = ./cmd/server

run:
	go run $(SERVER_DIR)/main.go

watch:
	air -c .air.toml