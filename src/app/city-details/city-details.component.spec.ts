import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from '@angular/core/testing';

import { CityDetailsComponent } from './city-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { of, Observable } from 'rxjs';

describe('CityDetailsComponent', () => {
  let component: CityDetailsComponent;
  let fixture: ComponentFixture<CityDetailsComponent>;
  let service: DashboardService;
  let injector: TestBed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CityDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();
    injector = getTestBed();
    service = injector.get(DashboardService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on init be called', () => {
    spyOn<any>(component, 'getCityDetails');
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
    spyOn(service, 'getCityCovidDetails').and.returnValue(of(data));
    component.getCityDetails();
    expect(service.getCityCovidDetails).toHaveBeenCalled();
  });
});
