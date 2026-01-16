import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, of } from 'rxjs';
import { LoginRequest, LoginResponse } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:3000';
  private readonly TOKEN_KEY = 'auth_token';
  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    // TODO: Implement login
    // 1. Make POST request to /auth/login with credentials
    // 2. Store the returned token in localStorage
    // 3. Update isAuthenticatedSubject to true
    // 4. Return the response
    //
    // Example:
    // return this.http.post<LoginResponse>(`${this.API_URL}/auth/login`, credentials)
    //   .pipe(
    //     tap(response => {
    //       this.setToken(response.token);
    //       this.isAuthenticatedSubject.next(true);
    //     })
    //   );
    
    return of({ token: '' }); // Placeholder
  }

  logout(): void {
    // TODO: Implement logout
    // 1. Remove token from localStorage
    // 2. Update isAuthenticatedSubject to false
    // 3. Optionally navigate to login page
    
    localStorage.removeItem(this.TOKEN_KEY);
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private hasToken(): boolean {
    return !!this.getToken();
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }
}
