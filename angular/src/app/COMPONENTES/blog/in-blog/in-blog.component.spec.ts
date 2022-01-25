import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InBlogComponent } from './in-blog.component';

describe('InBlogComponent', () => {
  let component: InBlogComponent;
  let fixture: ComponentFixture<InBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
