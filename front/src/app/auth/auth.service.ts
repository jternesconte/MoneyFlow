import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) { }

  private router = inject(Router);

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  register(name: string, email: string, password: string, password2: string): Observable<any> {
    return this.http.post('http://localhost:3000/api/user/register', { name, email, password, password2 }).pipe(
      tap((response: any) => {
        if (response.success && response.token) {
          this.setToken(response.token);
        }
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/api/user/login', { email, password }).pipe(
      tap((response: any) => {
        if (response.success && response.token) {
          this.setToken(response.token);
        }
      })
    );
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
    this.isLoggedInSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']); // Redirect to login page after logout
  }

  isAuthenticated(): boolean {
    return this.hasToken();
  }
}
