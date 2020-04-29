import { TestBed, inject } from '@angular/core/testing';

import { LoaderService } from './loader.service';
import { Subject } from 'rxjs';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true', () => {
    let subject: Subject<boolean> = new Subject<true>();
    service.show();
    expect(service.isLoading).toEqual(subject);
  });

  it('should return false', () => {
    let subject: Subject<boolean> = new Subject<false>();
    service.hide();
    expect(service.isLoading).toEqual(subject);
  });
});
