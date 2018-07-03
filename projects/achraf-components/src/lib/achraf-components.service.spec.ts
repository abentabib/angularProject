import { TestBed, inject } from '@angular/core/testing';

import { AchrafComponentsService } from './achraf-components.service';

describe('AchrafComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AchrafComponentsService]
    });
  });

  it('should be created', inject([AchrafComponentsService], (service: AchrafComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
