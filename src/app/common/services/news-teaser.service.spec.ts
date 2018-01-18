import { TestBed, inject } from '@angular/core/testing';

import { NewsTeaserService } from './news-teaser.service';

describe('NewsTeaserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsTeaserService]
    });
  });

  it('should be created', inject([NewsTeaserService], (service: NewsTeaserService) => {
    expect(service).toBeTruthy();
  }));
});
