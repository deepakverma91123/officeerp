import { TestBed } from '@angular/core/testing';

import { GatentryServiceService } from './gatentry-service.service';

describe('GatentryServiceService', () => {
  let service: GatentryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatentryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
