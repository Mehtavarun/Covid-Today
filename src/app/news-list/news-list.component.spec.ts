import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from '@angular/core/testing';

import { NewsListComponent } from './news-list.component';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NewsService } from '../services/news/news.service';
import { of } from 'rxjs';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;
  let newsService: NewsService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsListComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();
    injector = getTestBed();
    newsService = injector.get(NewsService);
    httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the news list', () => {
    spyOn(newsService, 'getNews').and.callFake(() => {
      return of([
        { id: 1, fullNews: '', newsTitle: '', summary: '', description: '' }
      ]);
    });
    component.initialiseNewsList();
    expect(component.showFullNews.length).toBe(1);
  });

  it('should change the news flag', () => {
    spyOn(newsService, 'getNews').and.callFake(() => {
      return of([
        { id: 1, fullNews: '', newsTitle: '', summary: '', description: '' }
      ]);
    });
    component.initialiseNewsList();
    component.showHideFullNews(0);
    expect(component.showFullNews[0]).toBeTruthy();
  });
});
