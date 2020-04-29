import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const fakeActivatedRoute = {
    snapshot: { queryParams: {} }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        FormBuilder,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('after ngOnInit the returnUrl should be "/"', () => {
    expect(component.returnUrl).toBe('/');
  });

  it('form vlaidity', () => {
    expect(component.loginForm.valid).toBeFalsy();
    let errors = { username: {}, password: {} };
    let username = component.loginForm.controls['username'];
    let password = component.loginForm.controls['password'];
    errors.password = password.errors;
    errors.username = username.errors;
    expect(errors.password['required']).toBeTruthy();
    expect(password.value).toBe('');
    expect(errors.username['required']).toBeTruthy();
    expect(username.value).toBe('');
  });

  it('loginError should be empty', () => {
    component.loginForm.controls.username.setValue('username');
    component.loginForm.controls.password.setValue('password');
    expect(component.loginForm.valid).toBeTruthy();
    expect(component.loginError).toBe('');
  });
});
