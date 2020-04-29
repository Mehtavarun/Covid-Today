import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { INews } from 'src/app/models/news';

describe('NewsService', () => {
  let service: NewsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(NewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should hit the url', () => {
    let news: INews[] = [
      { id: 0, newsTitle: '', fullNews: '', summary: '', description: '' }
    ];
    service.getNews().subscribe(res => {
      expect(res).toEqual(news);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/news');
    expect(req.request.method).toBe('GET');
    req.flush(news);
  });

  it('should hit the url', () => {
    let news: INews[] = [
      { id: 0, newsTitle: '', fullNews: '', summary: '', description: '' }
    ];
    service.getNewsById(1).subscribe(res => {
      expect(res).toEqual(news);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/news/1');
    expect(req.request.method).toBe('GET');
    req.flush(news);
  });
});
