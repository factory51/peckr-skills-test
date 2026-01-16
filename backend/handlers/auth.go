package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type LoginRequest struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type LoginResponse struct {
	Token string `json:"token"`
}

// Login handles user authentication and JWT token generation
func Login(c *gin.Context) {
	var req LoginRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// TODO: Implement authentication logic
	// For this test, hardcoded credentials are acceptable:
	// Username: "admin"
	// Password: "password123"
	//
	// Steps:
	// 1. Check if username and password match the expected values
	// 2. If valid, generate a JWT token with user information
	// 3. Set expiration time (e.g., 24 hours)
	// 4. Return the token in the response
	//
	// JWT token generation example:
	// token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
	//     "username": req.Username,
	//     "exp":      time.Now().Add(time.Hour * 24).Unix(),
	// })
	// tokenString, err := token.SignedString([]byte(os.Getenv("JWT_SECRET")))

	// Placeholder response - replace with actual implementation
	c.JSON(http.StatusNotImplemented, gin.H{"error": "Authentication not implemented"})
}
