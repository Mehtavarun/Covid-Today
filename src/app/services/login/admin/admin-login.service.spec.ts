import { TestBed } from '@angular/core/testing';

import { AdminLoginService } from './admin-login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminLoginService', () => {
  let service: AdminLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AdminLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false', () => {
    expect(service.isLoggedIn()).toBeFalsy();
  });

  it('should return true', () => {
    spyOn(localStorage, 'getItem').and.returnValue('user');
    expect(service.isLoggedIn()).toBeTruthy();
  });
});
