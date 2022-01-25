import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InVideoComponent } from './in-video.component';

describe('InVideoComponent', () => {
  let component: InVideoComponent;
  let fixture: ComponentFixture<InVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
