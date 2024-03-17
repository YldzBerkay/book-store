import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiComponent } from './carousel-multi.component';

describe('CarouselMultiComponent', () => {
  let component: CarouselMultiComponent;
  let fixture: ComponentFixture<CarouselMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselMultiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
