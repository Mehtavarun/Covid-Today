import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('DashboardService', () => {
  let service: DashboardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should hit the url', () => {
    let response = [{ city: 'delhi', active: 0, deaths: 0, recovered: 0 }];
    service.getCityCovidDetails().subscribe(res => {
      expect(res).toEqual(response);
    });

    const req = httpMock.expectOne(
      'https://api.covid19india.org/state_district_wise.json'
    );
    expect(req.request.method).toBe('GET');
    req.flush(response);
  });

  it('should hit the url for state data', () => {
    let response = [{ state: 'orissa', active: 0, deaths: 0, recovered: 0 }];
    service.getStateCovidDetails().subscribe(res => {
      expect(res).toEqual(response);
    });

    const req = httpMock.expectOne('https://api.covid19india.org/data.json');
    expect(req.request.method).toBe('GET');
    req.flush(response);
  });
});
