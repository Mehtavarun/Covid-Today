import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { NewsService } from '../services/news/news.service';
import { INews } from '../models/news';
import { Router } from '@angular/router';
import { AdminLoginService } from '../services/login/admin/admin-login.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  addNewsForm: FormGroup;

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private newService: NewsService,
    private router: Router,
    private adminLoginService: AdminLoginService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.addNewsForm = this.fb.group({
      newsTitle: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          this.noWhitespaceValidator
        ]
      ],
      summary: ['', [Validators.maxLength(40), this.noWhitespaceValidator]],
      description: [
        '',
        [
          Validators.required,
          Validators.maxLength(150),
          this.noWhitespaceValidator
        ]
      ],
      fullNews: ['']
    });
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  get formControls() {
    return this.addNewsForm.controls;
  }

  showSuccessToastr() {
    this.toastr
      .success('News has been added', 'Success!', {
        timeOut: 1500
      })
      .onHidden.subscribe(() => {
        this.router.navigate(['news']);
      });
  }

  addNews() {
    if (this.adminLoginService.isLoggedIn()) {
      if (this.addNewsForm.valid) {
        const {
          newsTitle,
          summary,
          description,
          fullNews
        } = this.addNewsForm.value;
        const news: INews = {
          id: null,
          newsTitle,
          summary,
          description,
          fullNews
        };
        this.newService.saveNews(news).subscribe(() => {
          this.showSuccessToastr();
        });
      }
    } else {
      this.router.navigate(['login'], {
        queryParams: { returnUrl: '/news/add' }
      });
    }
  }
}
