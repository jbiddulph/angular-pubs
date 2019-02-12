import { TestBed } from '@angular/core/testing';

import { TownsService } from './towns.service';

describe('TownsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TownsService = TestBed.get(TownsService);
    expect(service).toBeTruthy();
  });
});
