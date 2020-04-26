import { Injectable } from '@angular/core';
import { UserService } from '../../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  constructor(private userService: UserService) {}

  public isLoggedIn(): boolean {
    const user = localStorage.getItem('loggedInUser');
    if (
      !user ||
      user.trim().length === 0 ||
      !this.userService.getUserByUsername(user.trim())
    ) {
      return false;
    }
    return true;
  }
}
