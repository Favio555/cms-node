import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVistaPrincipalComponent } from './nav-vista-principal.component';

describe('NavVistaPrincipalComponent', () => {
  let component: NavVistaPrincipalComponent;
  let fixture: ComponentFixture<NavVistaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavVistaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVistaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
