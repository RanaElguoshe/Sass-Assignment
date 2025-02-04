import { TestBed } from '@angular/core/testing';

import { CallingApisService } from './calling-apis.service';

describe('CallingApisService', () => {
  let service: CallingApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallingApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
