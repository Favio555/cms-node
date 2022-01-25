import { TestBed } from '@angular/core/testing';

import { MenuDetalleService } from './menu-detalle.service';

describe('MenuDetalleService', () => {
  let service: MenuDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
