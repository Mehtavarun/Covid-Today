import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { INews } from 'src/app/models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private httpClient: HttpClient) {}

  public getNews() {
    return this.httpClient.get(`${env.webApiUrl}/news`);
  }

  public getNewsById(id) {
    return this.httpClient.get(`${env.webApiUrl}/news/${id}`);
  }

  public saveNews(news: INews) {
    return this.httpClient.post(`${env.webApiUrl}/news`, news);
  }
}
