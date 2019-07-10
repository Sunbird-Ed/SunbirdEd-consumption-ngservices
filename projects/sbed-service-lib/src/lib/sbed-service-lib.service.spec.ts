import { TestBed } from '@angular/core/testing';

import { ServiceLibService } from './sbed-service-lib.service';

describe('ServiceLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceLibService = TestBed.get(ServiceLibService);
    expect(service).toBeTruthy();
  });
});
