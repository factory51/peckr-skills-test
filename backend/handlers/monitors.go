package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type CreateMonitorRequest struct {
	Name                 string `json:"name" binding:"required,min=3,max=50"`
	URL                  string `json:"url" binding:"required,url"`
	CheckIntervalSeconds int    `json:"check_interval_seconds" binding:"required,min=30,max=3600"`
}

// CreateMonitor handles POST /api/monitors
func CreateMonitor(c *gin.Context) {
	var req CreateMonitorRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// TODO: Implement monitor creation
	// 1. Call models.Create() to insert the new monitor
	// 2. Handle any database errors appropriately
	// 3. Return the created monitor with HTTP 201 status
	//
	// Example:
	// monitor, err := models.Create(req.Name, req.URL, req.CheckIntervalSeconds)
	// if err != nil {
	//     c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create monitor"})
	//     return
	// }
	// c.JSON(http.StatusCreated, monitor)

	c.JSON(http.StatusNotImplemented, gin.H{"error": "CreateMonitor not implemented"})
}

// GetMonitors handles GET /api/monitors
func GetMonitors(c *gin.Context) {
	// TODO: Implement getting all monitors
	// 1. Call models.GetAll() to retrieve all monitors
	// 2. Handle any database errors
	// 3. Return the list of monitors
	//
	// Bonus: You could also join with the latest check status for each monitor
	// This would require a more complex SQL query with a JOIN

	c.JSON(http.StatusNotImplemented, gin.H{"error": "GetMonitors not implemented"})
}

// GetMonitor handles GET /api/monitors/:id
func GetMonitor(c *gin.Context) {
	// TODO: Uncomment and use the id variable when implementing
	// id, err := strconv.Atoi(c.Param("id"))
	// if err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid monitor ID"})
	// 	return
	// }

	// TODO: Implement getting a specific monitor
	// 1. Call models.GetByID() to retrieve the monitor
	// 2. Handle case where monitor is not found (return 404)
	// 3. Handle database errors
	// 4. Return the monitor details

	c.JSON(http.StatusNotImplemented, gin.H{"error": "GetMonitor not implemented"})
}

// DeleteMonitor handles DELETE /api/monitors/:id
func DeleteMonitor(c *gin.Context) {
	// TODO: Uncomment and use the id variable when implementing
	// id, err := strconv.Atoi(c.Param("id"))
	// if err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid monitor ID"})
	// 	return
	// }

	// TODO: Implement monitor deletion
	// 1. Optionally verify the monitor exists first
	// 2. Call models.Delete() to remove the monitor
	// 3. Handle errors appropriately
	// 4. Return success response (204 No Content or 200 OK)

	c.JSON(http.StatusNotImplemented, gin.H{"error": "DeleteMonitor not implemented"})
}
