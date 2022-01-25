import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAvisoComponent } from './vista-aviso.component';

describe('VistaAvisoComponent', () => {
  let component: VistaAvisoComponent;
  let fixture: ComponentFixture<VistaAvisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAvisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
