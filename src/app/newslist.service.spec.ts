import { TestBed } from '@angular/core/testing';

import { NewslistService } from './newslist.service';

describe('NewslistService', () => {
  let service: NewslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
