import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

class MockActivatedRouteSnapshot {
  private _data: any;
  get data() {
    return this._data;
  }
}

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        AuthGuardService,
        {
          provide: ActivatedRouteSnapshot,
          useClass: MockActivatedRouteSnapshot
        },
        {
          provide: RouterStateSnapshot,
          useClass: MockActivatedRouteSnapshot
        }
      ]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call request the json', inject([Router], (router: Router) => {
    route = TestBed.get(ActivatedRouteSnapshot);
    state = TestBed.get(RouterStateSnapshot);
    spyOnProperty(route, 'data', 'get').and.returnValue({ roles: ['admin'] });

    expect(service.canActivate(route, state)).toBeTruthy();
  }));
});
