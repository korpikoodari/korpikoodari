import { TestBed, inject } from '@angular/core/testing';

import { PersonserviceService } from './personservice.service';

describe('PersonserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonserviceService]
    });
  });

  it('should ...', inject([PersonserviceService], (service: PersonserviceService) => {
    expect(service).toBeTruthy();
  }));
});
