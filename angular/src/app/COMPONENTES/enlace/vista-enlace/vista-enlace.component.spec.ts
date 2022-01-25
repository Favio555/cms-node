import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEnlaceComponent } from './vista-enlace.component';

describe('VistaEnlaceComponent', () => {
  let component: VistaEnlaceComponent;
  let fixture: ComponentFixture<VistaEnlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEnlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
