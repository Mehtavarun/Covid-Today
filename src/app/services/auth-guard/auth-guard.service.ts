import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminLoginService } from '../login/admin/admin-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private adminLoginService: AdminLoginService,
    private router: Router
  ) {}
  canActivate() {
    if (!this.adminLoginService.isLoggedIn()) {
      // this.router.navigate(['/login']);
    }
    return true;
  }
}
