import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InEnlaceComponent } from './in-enlace.component';

describe('InEnlaceComponent', () => {
  let component: InEnlaceComponent;
  let fixture: ComponentFixture<InEnlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InEnlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InEnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
