package services
package services

import (
	"net/http"
	"skills-test-backend/models"
	"time"
)

// PerformHealthCheck makes an HTTP GET request to the URL and records the result
func PerformHealthCheck(url string) *models.Check {
	// TODO: Implement health check logic
	//
	// Steps:
	// 1. Create an HTTP client with a reasonable timeout (e.g., 10 seconds)
	//    client := &http.Client{Timeout: 10 * time.Second}
	//
































}	}		CheckedAt:      time.Now(),		IsUp:           false,		ResponseTimeMs: 0,		StatusCode:     0,	return &models.Check{	// Placeholder - replace with actual implementation	// Note: The MonitorID should be set by the caller, not in this function	//	// 7. Return the Check struct	//	//    }	//        defer resp.Body.Close()	//    if resp != nil {	// 6. Don't forget to close the response body if it exists	//	//    - Set IsUp to true if status code is 200-299, false otherwise	//    - Set ResponseTimeMs to calculated response time	//    - If request failed: set StatusCode to 0	//    - If request succeeded: set StatusCode from response	// 5. Create a Check struct with the results:	//	//    responseTime := int(time.Since(startTime).Milliseconds())	// 4. Calculate response time in milliseconds	//	//    resp, err := client.Get(url)	// 3. Make an HTTP GET request to the URL	//	//    startTime := time.Now()	// 2. Record the start time