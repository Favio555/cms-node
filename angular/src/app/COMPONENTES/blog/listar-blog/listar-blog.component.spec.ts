import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBlogComponent } from './listar-blog.component';

describe('ListarBlogComponent', () => {
  let component: ListarBlogComponent;
  let fixture: ComponentFixture<ListarBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
