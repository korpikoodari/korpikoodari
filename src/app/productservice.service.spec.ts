import { TestBed, inject } from '@angular/core/testing';

import { ProductserviceService } from './productservice.service';

describe('ProductserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductserviceService]
    });
  });

  it('should ...', inject([ProductserviceService], (service: ProductserviceService) => {
    expect(service).toBeTruthy();
  }));
});
