import { TestBed } from '@angular/core/testing';

import { TablaMultService } from './tabla-mult.service';

describe('TablaMultService', () => {
  let service: TablaMultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaMultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
