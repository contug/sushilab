import { TestBed } from '@angular/core/testing';

import { BlacklistHttpService } from './blacklist-http.service';

describe('BlacklistHttpService', () => {
  let service: BlacklistHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlacklistHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
