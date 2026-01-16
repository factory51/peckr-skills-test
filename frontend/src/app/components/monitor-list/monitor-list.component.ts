import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subject, interval, takeUntil, switchMap } from 'rxjs';
import { MonitorService } from '../../services/monitor.service';
import { CheckService } from '../../services/check.service';
import { AuthService } from '../../services/auth.service';
import { Monitor } from '../../models/monitor';

@Component({
  selector: 'app-monitor-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.scss']
})
export class MonitorListComponent implements OnInit, OnDestroy {
  monitors: Monitor[] = [];
  isLoading = false;
  errorMessage = '';
  private destroy$ = new Subject<void>();

  constructor(
    private monitorService: MonitorService,
    private checkService: CheckService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMonitors();
    this.setupPolling();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadMonitors(): void {
    // TODO: Implement loading monitors
    // 1. Set isLoading to true
    // 2. Call monitorService.getMonitors()
    // 3. Subscribe and update monitors array
    // 4. Handle errors appropriately
    // 5. Set isLoading to false
  }

  setupPolling(): void {
    // TODO: Implement polling to refresh monitors every 30 seconds
    // Use RxJS interval() and switchMap() operators
    // Remember to use takeUntil(this.destroy$) to prevent memory leaks
    //
    // Example:
    // interval(30000)
    //   .pipe(
    //     takeUntil(this.destroy$),
    //     switchMap(() => this.monitorService.getMonitors())
    //   )
    //   .subscribe(monitors => {
    //     this.monitors = monitors;
    //   });
  }

  triggerCheck(monitorId: number, event: Event): void {
    event.stopPropagation();
    // TODO: Implement manual check trigger
    // 1. Call checkService.triggerCheck(monitorId)
    // 2. Subscribe to the observable
    // 3. On success: show success message and reload monitors
    // 4. Handle errors
  }

  deleteMonitor(monitorId: number, event: Event): void {
    event.stopPropagation();
    // TODO: Implement monitor deletion
    // 1. Show confirmation dialog (use window.confirm for simplicity)
    // 2. If confirmed, call monitorService.deleteMonitor(monitorId)
    // 3. Subscribe and reload monitors on success
    // 4. Handle errors
  }

  navigateToDetail(monitorId: number): void {
    this.router.navigate(['/monitors', monitorId]);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getRelativeTime(dateString: string): string {
    // TODO: Implement relative time formatting
    // Convert ISO date string to "X minutes ago" format
    // For now, return the date string as-is
    return dateString;
  }
}
