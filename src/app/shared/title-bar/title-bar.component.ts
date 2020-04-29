import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../../services/login/admin/admin-login.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private adminLoginService: AdminLoginService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.adminLoginService.isLoggedIn();
  }
}
