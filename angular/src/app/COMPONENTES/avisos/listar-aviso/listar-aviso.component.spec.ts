import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAvisoComponent } from './listar-aviso.component';

describe('ListarAvisoComponent', () => {
  let component: ListarAvisoComponent;
  let fixture: ComponentFixture<ListarAvisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAvisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
