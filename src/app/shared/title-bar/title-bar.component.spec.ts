import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBarComponent } from './title-bar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('TitleBarComponent', () => {
  let component: TitleBarComponent;
  let fixture: ComponentFixture<TitleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitleBarComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be true', () => {
    component.ngOnInit();
    expect(component.isLoggedIn).toBeFalsy();
  });
});
