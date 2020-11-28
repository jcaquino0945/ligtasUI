import { TestBed } from '@angular/core/testing';

import { EvacsService } from './evacs.service';

describe('EvacsService', () => {
  let service: EvacsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvacsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
