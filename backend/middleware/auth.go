package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// AuthMiddleware validates JWT tokens for protected routes
func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// TODO: Implement JWT token validation
		//
		// Steps:
		// 1. Get the Authorization header from the request
		//    authHeader := c.GetHeader("Authorization")
		//
		// 2. Check if the header exists and starts with "Bearer "
		//    If not, return 401 Unauthorized
		//
		// 3. Extract the token string (remove "Bearer " prefix)
		//    tokenString := strings.TrimPrefix(authHeader, "Bearer ")
		//
		// 4. Parse and validate the JWT token
		//    You'll need to import: "os", "strings", and "github.com/golang-jwt/jwt/v5"
		//    token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		//        return []byte(os.Getenv("JWT_SECRET")), nil
		//    })
		//
		// 5. Check if token is valid
		//    if err != nil || !token.Valid {
		//        c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
		//        c.Abort()
		//        return
		//    }
		//
		// 6. Optionally, extract claims and set them in the context
		//    claims := token.Claims.(jwt.MapClaims)
		//    c.Set("username", claims["username"])
		//
		// 7. Call c.Next() to proceed to the next handler

		// Placeholder - remove this when implementing
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Authentication middleware not implemented"})
		c.Abort()
	}
}
