import { TestBed } from '@angular/core/testing';

import { CreaSessioneHttpService } from './crea-sessione-http.service';

describe('CreaSessioneHttpService', () => {
  let service: CreaSessioneHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaSessioneHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
