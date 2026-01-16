package models
package models

import "time"

type Check struct {
	ID             int       `json:"id"`
	MonitorID      int       `json:"monitor_id"`
	StatusCode     int       `json:"status_code"`
	ResponseTimeMs int       `json:"response_time_ms"`
	IsUp           bool      `json:"is_up"`
	CheckedAt      time.Time `json:"checked_at"`







































}	return nil, nil	// Your implementation herefunc GetStatsByMonitorID(monitorID int) (*CheckStats, error) {// WHERE monitor_id = ? AND checked_at > DATE_SUB(NOW(), INTERVAL 24 HOUR)// FROM checks //     AVG(response_time_ms) as average_response_ms//     (SUM(CASE WHEN is_up = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*)) as uptime_percentage,//     COUNT(*) as total_checks,// SELECT // Query example:// Hint: Use SUM with CASE WHEN for counting successful checks// This requires an aggregation query with GROUP BY// Calculate uptime percentage and average response time for last 24 hours// TODO: Implement GetStatsByMonitorID method}	return nil, nil	// Your implementation herefunc GetRecentByMonitorID(monitorID int, limit int) ([]Check, error) {// Query: "SELECT id, monitor_id, status_code, response_time_ms, is_up, checked_at FROM checks WHERE monitor_id = ? ORDER BY checked_at DESC LIMIT 50"// Get the last 50 checks for a specific monitor, ordered by most recent first// TODO: Implement GetRecentByMonitorID method}	return nil	// Your implementation herefunc (c *Check) Create() error {// Query: "INSERT INTO checks (monitor_id, status_code, response_time_ms, is_up, checked_at) VALUES (?, ?, ?, ?, NOW())"// Save a check result to the database// TODO: Implement Create method}	TotalChecks       int     `json:"total_checks"`	AverageResponseMs float64 `json:"average_response_ms"`	UptimePercentage  float64 `json:"uptime_percentage"`type CheckStats struct {}