import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InGaleriaComponent } from './in-galeria.component';

describe('InGaleriaComponent', () => {
  let component: InGaleriaComponent;
  let fixture: ComponentFixture<InGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InGaleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
