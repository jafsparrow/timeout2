import { TestBed, inject } from '@angular/core/testing';

import { EventsAdminService } from './events-admin.service';

describe('EventsAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsAdminService]
    });
  });

  it('should be created', inject([EventsAdminService], (service: EventsAdminService) => {
    expect(service).toBeTruthy();
  }));
});
