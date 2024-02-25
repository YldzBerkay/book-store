import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router: Router) { }

  canActivate = (): boolean => {
    let isAuth = localStorage.getItem("token") !== null
    if (!isAuth) {
      this.router.navigate(["/login"]);
      return false;
    }
    return isAuth
  }
}
