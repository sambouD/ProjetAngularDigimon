import { TestBed } from '@angular/core/testing';

import { SearchDigimonService } from './search-digimon.service';

describe('SearchDigimonService', () => {
  let service: SearchDigimonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchDigimonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
