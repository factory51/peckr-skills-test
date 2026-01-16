import { Check } from './check';

export interface Monitor {
  id: number;
  name: string;
  url: string;
  check_interval_seconds: number;
  created_at: string;
}

export interface MonitorWithStatus extends Monitor {
  latest_check?: Check;
  uptime_percentage?: number;
}

export interface CreateMonitorRequest {
  name: string;
  url: string;
  check_interval_seconds: number;
}
