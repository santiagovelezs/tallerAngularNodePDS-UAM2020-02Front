import { TestBed } from '@angular/core/testing';

import { AlmacenDeporteService } from './almacen-deporte.service';

describe('AlmacenDeporteService', () => {
  let service: AlmacenDeporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlmacenDeporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
