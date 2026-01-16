import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MonitorService } from '../../services/monitor.service';

@Component({
  selector: 'app-add-monitor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-monitor.component.html',
  styleUrls: ['./add-monitor.component.scss']
})
export class AddMonitorComponent {
  monitorForm: FormGroup;
  errorMessage = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private monitorService: MonitorService,
    private router: Router
  ) {
    this.monitorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      url: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      check_interval_seconds: [300, [Validators.required, Validators.min(30), Validators.max(3600)]]
    });
  }

  onSubmit(): void {
    if (this.monitorForm.valid) {
      // TODO: Implement monitor creation
      // 1. Set isLoading to true
      // 2. Call monitorService.createMonitor() with form values
      // 3. Subscribe to the observable
      // 4. On success: navigate back to dashboard
      // 5. On error: display error message
      // 6. Set isLoading to false
    }
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  // Getter methods for form validation
  get name() { return this.monitorForm.get('name'); }
  get url() { return this.monitorForm.get('url'); }
  get checkInterval() { return this.monitorForm.get('check_interval_seconds'); }
}
