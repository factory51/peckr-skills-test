package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// TriggerCheck handles POST /api/monitors/:id/check
func TriggerCheck(c *gin.Context) {
	// TODO: Uncomment and use the id variable when implementing
	// id, err := strconv.Atoi(c.Param("id"))
	// if err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid monitor ID"})
	// 	return
	// }

	// TODO: Implement manual health check trigger
	// 1. Get the monitor from database using models.GetByID()
	// 2. Verify monitor exists (return 404 if not)
	// 3. Call services.PerformHealthCheck() with the monitor's URL
	// 4. Save the check result using the Check model's Create() method
	// 5. Return the check result
	//
	// Example flow:
	// monitor, err := models.GetByID(id)
	// check := services.PerformHealthCheck(monitor.URL)
	// check.MonitorID = id
	// check.Create()
	// c.JSON(http.StatusOK, check)

	c.JSON(http.StatusNotImplemented, gin.H{"error": "TriggerCheck not implemented"})
}

// GetChecks handles GET /api/monitors/:id/checks
func GetChecks(c *gin.Context) {
	// TODO: Uncomment and use the id variable when implementing
	// id, err := strconv.Atoi(c.Param("id"))
	// if err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid monitor ID"})
	// 	return
	// }

	// TODO: Implement getting recent check history
	// 1. Verify monitor exists (optional but good practice)
	// 2. Call models.GetRecentByMonitorID() to get last 50 checks
	// 3. Handle errors
	// 4. Return the list of checks
	//
	// The test requires returning the last 50 checks, ordered by most recent first

	c.JSON(http.StatusNotImplemented, gin.H{"error": "GetChecks not implemented"})
}

// GetStats handles GET /api/monitors/:id/stats
func GetStats(c *gin.Context) {
	// TODO: Uncomment and use the id variable when implementing
	// id, err := strconv.Atoi(c.Param("id"))
	// if err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid monitor ID"})
	// 	return
	// }

	// TODO: Implement getting monitor statistics
	// 1. Verify monitor exists (optional)
	// 2. Call models.GetStatsByMonitorID() to calculate stats
	// 3. This should return uptime percentage and average response time for last 24 hours
	// 4. Handle case where no checks exist yet
	// 5. Return the statistics
	//
	// The aggregation query needs to:
	// - Count total checks in last 24 hours
	// - Calculate percentage of successful checks (is_up = true)
	// - Calculate average response time

	c.JSON(http.StatusNotImplemented, gin.H{"error": "GetStats not implemented"})
}
