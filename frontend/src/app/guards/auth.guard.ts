import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // TODO: Implement auth guard logic
  // 
  // Steps:
  // 1. Inject AuthService and Router
  // 2. Check if user is authenticated using AuthService
  // 3. If authenticated, return true to allow access
  // 4. If not authenticated, navigate to /login and return false
  //
  // Example:
  // const authService = inject(AuthService);
  // const router = inject(Router);
  // 
  // if (authService.isLoggedIn()) {
  //   return true;
  // }
  // 
  // router.navigate(['/login']);
  // return false;

  return true; // Placeholder - allows all access (remove when implementing)
};
