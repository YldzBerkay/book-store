import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInformationsComponent } from './login-informations.component';

describe('LoginInformationsComponent', () => {
  let component: LoginInformationsComponent;
  let fixture: ComponentFixture<LoginInformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginInformationsComponent]
    });
    fixture = TestBed.createComponent(LoginInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
