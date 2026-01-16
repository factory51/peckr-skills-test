export interface Check {
  id: number;
  monitor_id: number;
  status_code: number;
  response_time_ms: number;
  is_up: boolean;
  checked_at: string;
}

export interface CheckStats {
  uptime_percentage: number;
  average_response_ms: number;
  total_checks: number;
}
