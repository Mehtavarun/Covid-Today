import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.removeItem('loggedInUser');
    this.router.navigate(['/dashboard']);
  }
}
