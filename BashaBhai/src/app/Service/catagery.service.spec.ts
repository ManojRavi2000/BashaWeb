import { TestBed } from '@angular/core/testing';

import { CatageryService } from './catagery.service';

describe('CatageryService', () => {
  let service: CatageryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatageryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
