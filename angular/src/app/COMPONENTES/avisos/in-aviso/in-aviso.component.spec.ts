import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InAvisoComponent } from './in-aviso.component';

describe('InAvisoComponent', () => {
  let component: InAvisoComponent;
  let fixture: ComponentFixture<InAvisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InAvisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
