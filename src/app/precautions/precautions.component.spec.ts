import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from '@angular/core/testing';

import { PrecautionsComponent } from './precautions.component';
import { By } from '@angular/platform-browser';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('getPrecautions', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let component: PrecautionsComponent;
  let fixture: ComponentFixture<PrecautionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrecautionsComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const req = httpMock.match(`${environment.webApiUrl}/precautions`);
    expect(req[0].request.method).toBe('GET');
    expect(component).toBeTruthy();
  });

  it('heading should be PRECAUTIONS', () => {
    const heading = 'PRECAUTION';
    const headingPrecautions = fixture.debugElement.query(
      By.css('.card-header')
    );
    httpMock.match(`${environment.webApiUrl}/precautions`);
    expect(headingPrecautions.nativeElement.textContent).toContain(heading);
  });
});
