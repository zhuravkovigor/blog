package handlers

import (
	"blog/internals/database"
	"encoding/json"
	"log"
	"net/http"
)

func GetPosts(w http.ResponseWriter, r *http.Request) {
	posts, err := database.GetAllPosts()
	if err != nil {
		log.Printf("❌ Error fetching posts: %v", err)
		http.Error(w, "Error fetching posts", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	err = json.NewEncoder(w).Encode(posts)
	if err != nil {
		log.Printf("❌ Error encoding json: %v", err)
		http.Error(w, "Error encoding json", http.StatusInternalServerError)
		return
	}
}
