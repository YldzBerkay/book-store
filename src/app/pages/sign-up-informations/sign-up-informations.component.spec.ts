import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpInformationsComponent } from './sign-up-informations.component';

describe('SignUpInformationsComponent', () => {
  let component: SignUpInformationsComponent;
  let fixture: ComponentFixture<SignUpInformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpInformationsComponent]
    });
    fixture = TestBed.createComponent(SignUpInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
