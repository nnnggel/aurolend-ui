import { TestBed } from '@angular/core/testing';

import { ComputedService } from './computed.service';

describe('ComputedService', () => {
  let service: ComputedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
