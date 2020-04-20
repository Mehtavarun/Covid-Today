import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  testToastr() {
    this.toastr.success('Hello world!', 'Toastr fun!', {
      timeOut: 2000
    });
  }
}
