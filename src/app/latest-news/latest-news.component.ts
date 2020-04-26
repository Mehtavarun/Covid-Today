import { Component, OnInit } from '@angular/core';
import { INews } from '../models/news';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  newsList: INews[];
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((newsList: INews[]) => {
      this.newsList = newsList;
    });
  }
}
