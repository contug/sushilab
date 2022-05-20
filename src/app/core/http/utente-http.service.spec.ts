import { TestBed } from '@angular/core/testing';

import { UtenteHttpService } from './utente-http.service';

describe('UtenteHttpService', () => {
  let service: UtenteHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtenteHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
