import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { IUser } from 'src/app/models/user';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should hit the url', () => {
    let user: IUser[] = [{ id: 0, username: 'admin', password: 'admin' }];
    service.getUserByUsername('user').subscribe(res => {
      expect(res).toEqual(user);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/^user$');
    expect(req.request.method).toBe('GET');
    req.flush(user);
  });
});
