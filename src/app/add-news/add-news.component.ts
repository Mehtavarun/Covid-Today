import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from '../services/news/news.service';
import { INews } from '../models/news';

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
    private newService: NewsService
  ) {}

  ngOnInit(): void {
    this.addNewsForm = this.fb.group({
      newsTitle: ['', [Validators.required, Validators.maxLength(15)]],
      summary: ['', Validators.maxLength(40)],
      description: ['', [Validators.required, Validators.maxLength(150)]],
      fullNews: ['']
    });
  }

  get formControls() {
    return this.addNewsForm.controls;
  }

  showSuccessToastr() {
    this.toastr
      .success('News has been added', 'Success!', {
        timeOut: 2000
      })
      .onHidden.subscribe(() => {
        this.addNewsForm.reset();
      });
  }

  addNews() {
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
  }
}
