import { TestBed } from '@angular/core/testing';

import { ConsumptionserviceService } from './consumptionservice.service';

describe('ConsumptionserviceService', () => {
  let service: ConsumptionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumptionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
