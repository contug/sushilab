import { TestBed } from '@angular/core/testing';

import { GuidaHttpService } from './guida-http.service';

describe('GuidaHttpService', () => {
  let service: GuidaHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuidaHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
