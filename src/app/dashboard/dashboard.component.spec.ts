import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Observable, of } from 'rxjs';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: DashboardService;
  let injector: TestBed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
    injector = getTestBed();
    service = injector.get(DashboardService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on init be called', () => {
    spyOn<any>(component, 'getStateDetails');
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('service should be called', () => {
    const data = [{ city: 'hoshiarpur', active: 7, confimed: 4 }];
    let states$: Observable<any[]>;
    states$ = of(data);
    states$.subscribe(states => {
      expect(states).toEqual(data);
    });
    spyOn(service, 'getStateCovidDetails').and.returnValue(of(data));
    component.getStateDetails();
  });
});
