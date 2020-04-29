import { Component, OnDestroy } from '@angular/core';
import { INews } from '../models/news';
import { NewsService } from '../services/news/news.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnDestroy {
  newsList: INews[];
  showFullNews: boolean[];
  navigationSubscription;

  constructor(private newsService: NewsService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseNewsList();
      }
    });
  }

  initialiseNewsList() {
    this.newsService.getNews().subscribe((newsList: INews[]) => {
      this.newsList = newsList;
      this.showFullNews = Array(newsList.length).fill(false);
    });
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  showHideFullNews(index) {
    this.showFullNews[index] = !this.showFullNews[index];
  }
}
