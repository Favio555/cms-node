import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFooterComponent } from './listar-footer.component';

describe('ListarFooterComponent', () => {
  let component: ListarFooterComponent;
  let fixture: ComponentFixture<ListarFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
