import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MonitorService } from '../../services/monitor.service';
import { CheckService } from '../../services/check.service';
import { Monitor } from '../../models/monitor';
import { Check, CheckStats } from '../../models/check';

@Component({
  selector: 'app-monitor-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './monitor-detail.component.html',
  styleUrls: ['./monitor-detail.component.scss']
})
export class MonitorDetailComponent implements OnInit, OnDestroy {
  monitor: Monitor | null = null;
  checks: Check[] = [];
  stats: CheckStats | null = null;
  isLoading = false;
  errorMessage = '';
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private monitorService: MonitorService,
    private checkService: CheckService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadMonitorDetails(+id);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadMonitorDetails(id: number): void {
    // TODO: Implement loading monitor details
    // 1. Set isLoading to true
    // 2. Load monitor, checks, and stats in parallel using forkJoin or separately
    // 3. Call:
    //    - monitorService.getMonitor(id)
    //    - checkService.getChecks(id)
    //    - checkService.getStats(id)
    // 4. Update component properties with responses
    // 5. Handle errors (monitor not found = navigate back)
    // 6. Set isLoading to false
  }

  triggerCheck(): void {
    if (!this.monitor) return;
    
    // TODO: Implement manual check trigger
    // 1. Call checkService.triggerCheck(monitor.id)
    // 2. On success: reload monitor details to show new check
    // 3. Handle errors
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  getStatusClass(check: Check): string {
    return check.is_up ? 'text-success' : 'text-danger';
  }

  getStatusText(check: Check): string {
    return check.is_up ? 'Up' : 'Down';
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleString();
  }
}
