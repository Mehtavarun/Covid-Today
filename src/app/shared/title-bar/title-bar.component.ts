import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../../services/login/admin/admin-login.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(
    private adminLoginService: AdminLoginService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.adminLoginService.isLoggedIn();
    this.storageService.watchStorage().subscribe(() => {
      this.isLoggedIn = this.adminLoginService.isLoggedIn();
    });
  }
}
