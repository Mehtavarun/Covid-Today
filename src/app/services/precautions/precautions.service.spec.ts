import { TestBed } from '@angular/core/testing';

import { PrecautionsService } from './precautions.service';

describe('PrecautionsService', () => {
  let service: PrecautionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecautionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
