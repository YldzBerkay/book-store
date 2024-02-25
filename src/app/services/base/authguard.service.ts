import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router: Router) { }

  canActivate = (): boolean => {
    let isAuth = localStorage.getItem("userAuthToken") === null;
    if (!isAuth) {
      this.router.navigate(['/']);
      return false;
    }
    return isAuth
  }
}
