import { TestBed, inject } from '@angular/core/testing';

import { ClubDetailsService } from './club-details.service';

describe('ClubDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubDetailsService]
    });
  });

  it('should be created', inject([ClubDetailsService], (service: ClubDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
