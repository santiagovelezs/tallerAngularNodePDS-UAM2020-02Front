import { TestBed } from '@angular/core/testing';

import { BolitaService } from './bolita.service';

describe('BolitaService', () => {
  let service: BolitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BolitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
