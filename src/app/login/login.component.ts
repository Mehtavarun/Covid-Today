import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminLoginService } from '../services/login/admin/admin-login.service';
import { UserService } from '../services/user/user.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  loginError: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private adminLoginService: AdminLoginService,
    private userService: UserService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    if (this.adminLoginService.isLoggedIn()) {
      this.storageService.setItem(
        'loggedInUser',
        localStorage.getItem('loggedInUser')
      );
      this.router.navigate(['dashboard']);
    }
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.userService
        .getUserByUsername(username)
        .subscribe((userList: any[]) => {
          const user = userList[0];
          if (!user) {
            this.loginError = 'No user exist for username';
          } else if (user.password !== password) {
            this.loginError = 'Incorrect username password';
          } else {
            this.storageService.setItem('loggedInUser', username);
            this.router.navigate([decodeURIComponent(this.returnUrl)]);
          }
        });
    }
  }
}
