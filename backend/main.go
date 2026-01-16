package main

import (
	"log"
	"os"
	"skills-test-backend/config"
	"skills-test-backend/handlers"
	"skills-test-backend/middleware"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using environment variables")
	}

	// Initialize database connection
	if err := config.InitDB(); err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}
	defer config.CloseDB()

	// Initialize Gin router
	router := gin.Default()

	// CORS middleware
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:4200"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	// Public routes (no authentication required)
	router.POST("/auth/login", handlers.Login)

	// Protected routes (require JWT authentication)
	api := router.Group("/api")
	api.Use(middleware.AuthMiddleware())
	{
		// Monitor endpoints
		api.POST("/monitors", handlers.CreateMonitor)
		api.GET("/monitors", handlers.GetMonitors)
		api.GET("/monitors/:id", handlers.GetMonitor)
		api.DELETE("/monitors/:id", handlers.DeleteMonitor)

		// Check endpoints
		api.POST("/monitors/:id/check", handlers.TriggerCheck)
		api.GET("/monitors/:id/checks", handlers.GetChecks)
		api.GET("/monitors/:id/stats", handlers.GetStats)
	}

	// Get port from environment or use default
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	log.Printf("Server starting on port %s...", port)
	if err := router.Run(":" + port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
