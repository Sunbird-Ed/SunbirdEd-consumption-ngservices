import { TestBed } from '@angular/core/testing';

import { TelemetryGeneratorService } from './telemetry-generator.service';

describe('TelemetryGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelemetryGeneratorService = TestBed.get(TelemetryGeneratorService);
    expect(service).toBeTruthy();
  });
});
