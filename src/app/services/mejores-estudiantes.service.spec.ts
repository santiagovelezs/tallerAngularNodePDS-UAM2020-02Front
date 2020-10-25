import { TestBed } from '@angular/core/testing';

import { MejoresEstudiantesService } from './mejores-estudiantes.service';

describe('MejoresEstudiantesService', () => {
  let service: MejoresEstudiantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MejoresEstudiantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
