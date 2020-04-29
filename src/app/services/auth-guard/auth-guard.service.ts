import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AdminLoginService } from '../login/admin/admin-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private adminLoginService: AdminLoginService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.isUserLoggedIn(state);
  }

  private isUserLoggedIn(state: RouterStateSnapshot) {
    if (!this.adminLoginService.isLoggedIn()) {
      this.router.navigate(['login'], {
        queryParams: { returnUrl: state.url }
      });
    }
    return true;
  }
}
