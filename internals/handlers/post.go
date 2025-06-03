package handlers

import (
	"blog/internals/models"
	"encoding/json"
	"net/http"
)

func GetPosts(w http.ResponseWriter, r *http.Request) {
	posts := []models.Post{
		{
			ID:        "1",
			Title:     "First Post",
			Content:   "This is the content of the first post.",
			CreatedAt: "2023-10-01T12:00:00Z",
			UpdatedAt: "2023-10-01T12:00:00Z",
		},
	}

	w.Header().Set("Content-Type", "application/json")

	err := json.NewEncoder(w).Encode(posts)

	if err != nil {
		http.Error(w, "Error encoding json", http.StatusInternalServerError)
		return
	}
}
