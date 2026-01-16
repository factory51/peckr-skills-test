import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Check, CheckStats } from '../models/check';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  private readonly API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  triggerCheck(monitorId: number): Observable<Check> {
    // TODO: Implement API call to POST /api/monitors/:id/check
    // Manually trigger a health check for a specific monitor
    // Return the check result
    return of({} as Check); // Placeholder
  }

  getChecks(monitorId: number): Observable<Check[]> {
    // TODO: Implement API call to GET /api/monitors/:id/checks
    // Get the last 50 check results for a monitor
    // Return an array of checks ordered by most recent first
    return of([]); // Placeholder
  }

  getStats(monitorId: number): Observable<CheckStats> {
    // TODO: Implement API call to GET /api/monitors/:id/stats
    // Get uptime percentage and average response time for last 24 hours
    // Return the statistics object
    return of({} as CheckStats); // Placeholder
  }
}
