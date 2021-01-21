import { TestBed } from '@angular/core/testing';

import { CustomerdashboardService } from './customerdashboard.service';

describe('CustomerdashboardService', () => {
  let service: CustomerdashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerdashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
