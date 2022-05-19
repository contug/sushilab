import { TestBed } from '@angular/core/testing';

import { SessioneHttpService } from './sessione-http.service';

describe('CreaSessioneHttpService', () => {
  let service: SessioneHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessioneHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
