import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // TODO: Implement login submission
      // 1. Set isLoading to true
      // 2. Call authService.login() with form values
      // 3. Subscribe to the observable
      // 4. On success: navigate to /dashboard
      // 5. On error: set errorMessage and display to user
      // 6. Set isLoading to false in both cases
      //
      // Example:
      // this.isLoading = true;
      // this.errorMessage = '';
      // this.authService.login(this.loginForm.value).subscribe({
      //   next: () => {
      //     this.router.navigate(['/dashboard']);
      //   },
      //   error: (err) => {
      //     this.errorMessage = 'Invalid credentials. Please try again.';
      //     this.isLoading = false;
      //   },
      //   complete: () => {
      //     this.isLoading = false;
      //   }
      // });
    }
  }
}
