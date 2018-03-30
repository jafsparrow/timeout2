import { TestBed, inject } from '@angular/core/testing';

import { AnnService } from './ann.service';

describe('AnnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnnService]
    });
  });

  it('should be created', inject([AnnService], (service: AnnService) => {
    expect(service).toBeTruthy();
  }));
});
