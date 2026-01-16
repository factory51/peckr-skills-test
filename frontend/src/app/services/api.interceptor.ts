import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // TODO: Implement token attachment logic
  // 
  // Steps:
  // 1. Get the AuthService using inject()
  // 2. Get the token from AuthService
  // 3. If token exists, clone the request and add Authorization header
  // 4. Pass the modified (or original) request to next()
  //
  // Example:
  // const authService = inject(AuthService);
  // const token = authService.getToken();
  // 
  // if (token) {
  //   const cloned = req.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   });
  //   return next(cloned);
  // }
  // 
  // return next(req);

  return next(req); // Placeholder
};
