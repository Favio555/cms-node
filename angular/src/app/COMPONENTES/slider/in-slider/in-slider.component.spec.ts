import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InSliderComponent } from './in-slider.component';

describe('InSliderComponent', () => {
  let component: InSliderComponent;
  let fixture: ComponentFixture<InSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
