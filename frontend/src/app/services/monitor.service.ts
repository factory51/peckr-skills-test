import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Monitor, CreateMonitorRequest } from '../models/monitor';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private readonly API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getMonitors(): Observable<Monitor[]> {
    // TODO: Implement API call to GET /api/monitors
    // Return an array of all monitors
    return of([]); // Placeholder
  }

  getMonitor(id: number): Observable<Monitor> {
    // TODO: Implement API call to GET /api/monitors/:id
    // Return a single monitor by ID
    return of({} as Monitor); // Placeholder
  }

  createMonitor(monitor: CreateMonitorRequest): Observable<Monitor> {
    // TODO: Implement API call to POST /api/monitors
    // Send the monitor data and return the created monitor
    return of({} as Monitor); // Placeholder
  }

  deleteMonitor(id: number): Observable<void> {
    // TODO: Implement API call to DELETE /api/monitors/:id
    // Return an observable that completes when deletion is successful
    return of(undefined); // Placeholder
  }
}
