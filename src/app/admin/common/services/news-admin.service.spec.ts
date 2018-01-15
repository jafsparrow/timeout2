import { TestBed, inject } from '@angular/core/testing';

import { NewsAdminService } from './news-admin.service';

describe('NewsAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsAdminService]
    });
  });

  it('should be created', inject([NewsAdminService], (service: NewsAdminService) => {
    expect(service).toBeTruthy();
  }));
});
