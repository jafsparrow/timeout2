import { TestBed, inject } from '@angular/core/testing';

import { ClubAdminService } from './club-admin.service';

describe('ClubAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubAdminService]
    });
  });

  it('should be created', inject([ClubAdminService], (service: ClubAdminService) => {
    expect(service).toBeTruthy();
  }));
});
