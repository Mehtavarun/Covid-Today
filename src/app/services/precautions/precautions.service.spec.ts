import { TestBed } from '@angular/core/testing';

import { PrecautionsService } from './precautions.service';
import { IPrecautions } from 'src/app/models/precautions';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';

describe('PrecautionsService', () => {
  let service: PrecautionsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PrecautionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should hit the url', () => {
    let precautions: IPrecautions[] = [{ id: 0, precaution: '' }];
    service.getPrecautions().subscribe(res => {
      expect(res).toEqual(precautions);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/precautions');
    expect(req.request.method).toBe('GET');
    req.flush(precautions);
  });
});
