-- Monitors table - Stores website monitor configurations
CREATE TABLE IF NOT EXISTS monitors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    url VARCHAR(500) NOT NULL,
    check_interval_seconds INT DEFAULT 300,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TODO: Add appropriate indexes
-- Consider: Which columns will be used in WHERE clauses? Which support JOINs?
-- Example: CREATE INDEX idx_column_name ON table_name(column_name);


-- Checks table - Stores health check results
CREATE TABLE IF NOT EXISTS checks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    monitor_id INT NOT NULL,
    status_code INT,
    response_time_ms INT,
    is_up BOOLEAN NOT NULL,
    checked_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (monitor_id) REFERENCES monitors(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TODO: Add appropriate indexes
-- Consider: How will you query recent checks? How will you filter by date ranges?
-- Think about: JOIN performance, WHERE clause filtering, ORDER BY operations
