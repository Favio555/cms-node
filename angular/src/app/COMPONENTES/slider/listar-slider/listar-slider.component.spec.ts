import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSliderComponent } from './listar-slider.component';

describe('ListarSliderComponent', () => {
  let component: ListarSliderComponent;
  let fixture: ComponentFixture<ListarSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
