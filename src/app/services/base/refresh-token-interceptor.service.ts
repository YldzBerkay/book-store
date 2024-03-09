import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { RefreshTokenRequestCommand } from 'src/app/models/commands/auth-request-commands';
import { AuthService } from '../auth.service';
import { from } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }
  private tokenExpires: Date = new Date();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getUser().userAuthToken; // Get token from AuthService

    if (token) {
      this.refreshToken()
    }

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(request).pipe(
      catchError((error, caught) => {
        if (error.status === 401) {
          return from(this.refreshToken()).pipe(
            switchMap(() => {
              request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${this.authService.getUser().userAuthToken}`
                }
              });
              return next.handle(request);
            })
          );
        }
        return caught;
      })
    );

  }

  private async refreshToken(): Promise<void> {
    this.tokenExpires = new Date(localStorage.getItem('userExpire') || '');
    const currentTime = new Date();
    if (currentTime > this.tokenExpires) {
      const command: RefreshTokenRequestCommand = {
        RefreshToken: localStorage.getItem('userRefreshToken') || '',
        UserId: localStorage.getItem('userId') || ''
      };
      const response = await this.authService.refreshToken(command);

      if (response.IsSuccessful) {
        this.authService.updateToken(response.Data);
        console.log('Token is refreshed');
      }
    }
  }

}